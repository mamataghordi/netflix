import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/confiSlice";
// import { LANGS } from "../utils/languageConstants";
const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				//user signed in
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				navigate("/browse");
			} else {
				//user signed out
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);
	const HandleLangChange = (e) => {
		console.log(e.target.value);

		dispatch(changeLanguage(e.target.value));
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};
	const handleGptSearch = () => {
		dispatch(toggleSearch());
	};
	return (
		<div className="absolute w-screen bg-gradient-to-b from-black z-20 ">
			<div>
				<img className="w-32 " src={LOGO} alt="netflix-logo" />
				<select onChange={HandleLangChange}>
					{SUPPORTED_LANGUAGES.map((lang) => (
						<option key={lang.id} value={lang.id}>
							{lang.name}
						</option>
					))}
				</select>
			</div>

			<button
				onClick={handleGptSearch}
				className="bg-gray-300 px-2 py-1 rounded-lg "
			>
				GPT Search
			</button>
			<div>
				<button className="text-white bg-pink-400" onClick={handleSignOut}>
					Sign out
				</button>
			</div>
		</div>
	);
};
export default Header;
