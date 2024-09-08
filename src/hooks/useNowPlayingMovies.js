import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const nowPlayingApi = async () => {
		const data = await fetch("https://freetestapi.com/api/v1/movies");
		const json = await data.json();
		console.log(json);
		dispatch(addNowPlayingMovie(json));
	};
	useEffect(() => {
		nowPlayingApi();
	}, []);
};
export default useNowPlayingMovies;
