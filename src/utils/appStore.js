import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import configReducer from "./confiSlice";
const appStore = configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
		gpt: gptReducer,
		config: configReducer,
	},
});
export default appStore;
