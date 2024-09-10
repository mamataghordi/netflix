import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useNowPlayingMovies();
	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
			<GptSearch />
		</div>
	);
};
export default Browse;
