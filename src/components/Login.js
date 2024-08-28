import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);

	const clickHandler = () => {
		setIsSignIn(!isSignIn);
	};
	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_medium.jpg"
					alt="netflix bg"
				/>
			</div>
			<form className="bg-opacity-70 bg-black h-100lvh flex flex-col absolute rounded w-6/12 my-20 p-5 mx-auto right-0 left-0 ">
				<h1 className="text-white font-bold text-3xl p-2 text-left">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignIn && (
					<input
						type="text"
						className=" my-4 p-2 rounded bg-gray-800 border text-white"
						placeholder="Full Name"
					/>
				)}
				<input
					type="text"
					className=" my-4 p-2 rounded bg-gray-800 border text-white"
					placeholder="Email or Number"
				/>

				<input
					type="Password"
					className="text-white bg-gray-800 my-2 p-2 rounded bg-transparent border"
					placeholder="Password"
				/>
				<button className=" my-4 px-16 py-2 bg-red-700 text-lg text-white rounded">
					{isSignIn ? "Sign In" : "Sign Up"}
				</button>
				<p onClick={clickHandler} className="text-white cursor-pointer">
					{isSignIn
						? "New To Netflix? Sign up now"
						: "Already Registered? Sign in Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
