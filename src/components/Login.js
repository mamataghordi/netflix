import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

import { useDispatch, useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import { MAIN_PIC } from "../utils/constants";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [emailErr, setEmailErr] = useState(null);
	const [passwordErr, setPasswordErr] = useState(null);

	const dispatch = useDispatch();
	const email = useRef(null);
	const password = useRef(null);
	const name = useRef();
	const showGpt = useSelector((state) => state.gpt?.showSearch);
	const validateFormHandler = () => {
		setEmailErr(null);
		setPasswordErr(null);

		const errors = validateForm(email.current.value, password.current.value);
		if (errors) {
			return;
		}
		if (!isSignIn) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: "Jane Q. User",
						photoURL: "https://example.com/jane-q-user/profile.jpg",
					})
						.then(() => {
							// Profile updated!
							// ...
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							// An error occurred
							// ...
						});

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setEmailErr(errorCode + " " + errorMessage);
					// ..
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}
		if (errors.email) {
			setEmailErr(errors.email);
		}
		if (errors.password) {
			setPasswordErr(errors.password);
		}
	};

	const clickHandler = () => {
		setIsSignIn(!isSignIn);
	};
	useNowPlayingMovies();
	return (
		<div>
			<Header />
			<div className="absolute -z-10">
				<img src={MAIN_PIC} alt="netflix bg" />
			</div>
			{/*	<form
				onSubmit={(e) => e.preventDefault()}
				className="bg-opacity-70 bg-black h-100lvh flex flex-col absolute rounded w-6/12 my-20 p-5 mx-auto right-0 left-0 "
			>
				<h1 className="text-white font-bold text-3xl p-2 text-left">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignIn && (
					<input
						ref={name}
						type="text"
						className=" my-4 p-2 rounded bg-gray-800 border text-white"
						placeholder="Full Name"
					/>
				)}
				<input
					ref={email}
					type="text"
					className="text-white bg-gray-800 my-2 p-2 rounded bg-transparent border"
					placeholder="Email or Number"
				/>
				<p className="text-red-700">{emailErr}</p>
				<input
					ref={password}
					type="password"
					className="text-white bg-gray-800 my-2 p-2 rounded bg-transparent border"
					placeholder="Password"
				/>
				<p className="text-red-700">{passwordErr}</p>
				<button
					onClick={validateFormHandler}
					className=" my-4 px-16 py-2 bg-red-700 text-lg text-white rounded"
				>
					{isSignIn ? "Sign In" : "Sign Up"}
				</button>
				<p onClick={clickHandler} className="text-white cursor-pointer">
					{isSignIn
						? "New To Netflix? Sign up now"
						: "Already Registered? Sign in Now"}
				</p>
			</form> */}
			{showGpt ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Login;
