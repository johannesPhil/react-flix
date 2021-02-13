import axios from "axios";

const API_KEY = "6f53f4a81ecef5f6a1f7440bb392e20b";
const moviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const trendingURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
const tvseriesURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`;
const movieURL = "https://api.themoviedb.org/3/movie/";
const seriesURL = "https://api.themoviedb.org/3/tv/";

// axios.get(moviesURL).then((res) => console.log(res.data));
// axios.get(trendingURL).then((res) => console.log({ trend: res.data }));
// axios.get(tvseriesURL).then((res) => console.log(res.data));

const getMovies = () => (dispatch) => {
	axios.get(moviesURL).then((res) =>
		dispatch({
			type: "GET_MOVIES",
			payload: res.data.results,
		})
	);
};

const getTrending = () => (dispatch) => {
	axios.get(trendingURL).then((res) =>
		dispatch({
			type: "GET_TRENDING",
			payload: res.data.results,
		})
	);
};

const getDetails = (id) => (dispatch) => {
	axios
		.get(`${movieURL}${id}?api_key=${API_KEY}`)
		.then((res) => {
			if (!res.ok) {
				// console.log("not ok");
				axios
					.get(`${seriesURL}${id}?api_key=${API_KEY}`)
					.then((res) =>
						dispatch({
							type: "GET_DETAILS",
							payload: res.data,
						})
					)
					.catch((error) => console.log(error));
			}
			dispatch({
				type: "GET_DETAILS",
				payload: res.data,
			});
		})
		.catch((error) => console.log(error));
};

const getTvSeries = () => (dispatch) => {
	axios.get(tvseriesURL).then((res) =>
		dispatch({
			type: "GET_TV_SERIES",
			payload: res.data.results,
		})
	);
};

export default {
	getMovies,
	getTrending,
	getTvSeries,
	getDetails,
};
