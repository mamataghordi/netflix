import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
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
	return (
		<div className="absolute w-screen bg-gradient-to-b from-black z-20 ">
			<img className="w-32 " src={LOGO} alt="netflix-logo" />
			<div>
				<button className="text-white bg-pink-400" onClick={handleSignOut}>
					Sign out
				</button>
			</div>
		</div>
	);
};
export default Header;
