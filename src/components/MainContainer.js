import React from "react";
import { useSelector } from "react-redux";
import Title from "./Title.js";
import VideoBg from "./VideoBg";

const MainContainer = () => {
	const movie = useSelector((state) => state.movie?.nowPlayingMovies);

	if (!movie) {
		return;
	}
	const mainMovie = movie[0];
	console.log(mainMovie);
	const { title, genre, director, trailer, website, poster } = mainMovie;

	return (
		<div>
			<Title title={title} genre={genre} director={director} />
			<VideoBg trailer={trailer} website={website} />
		</div>
	);
};

export default MainContainer;
