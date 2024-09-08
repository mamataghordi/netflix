import React from "react";

const Title = ({ title, genre, director }) => {
	return (
		<div className=" pt-24">
			<h1 className="text-2xl font-bold">{title}</h1>
			<p>{genre}</p>
			<p>By -{director}</p>
		</div>
	);
};

export default Title;
