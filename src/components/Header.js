import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
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
			<img
				className="w-32 "
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netflix-logo"
			/>
			{user && (
				<div>
					<button onClick={handleSignOut}> Sign out</button>
				</div>
			)}
		</div>
	);
};
export default Header;
