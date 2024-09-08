import React, { useEffect } from "react";

const VideoBg = ({ trailer }) => {
	// const trailerOfTheMovie = async () => {
	// 	const response = await fetch(trailer);
	// 	const data = await response.json();
	// 	console.log(data);
	// };
	// useEffect(() => {
	// 	trailerOfTheMovie();
	// }, []);
	return (
		<div>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/PLl99DlL6b4?si=LbAjpMzxm9diylEE"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default VideoBg;
