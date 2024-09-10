import React from "react";
import { LANGS } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearch = () => {
	const langKey = useSelector((state) => state.config.lang);
	return (
		<div className="p-[20%] rounded">
			<form className="bg-black rounde-lg p-5 grid grid-cols-12 ">
				<input
					className="bg-gray-300 mr-6 px-3 py-1 rounded-lg col-span-9"
					placeholder={LANGS[langKey].GptSearchPlaceHolder}
				></input>
				<button className="bg-red-700 px-3 py-1 rounded-lg col-span-3">
					{LANGS[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearch;
