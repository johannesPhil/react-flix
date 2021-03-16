import axios from "axios";

const API_KEY = "6f53f4a81ecef5f6a1f7440bb392e20b";
const moviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const trendingURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
const tvseriesURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`;
const movieURL = "https://api.themoviedb.org/3/movie/";
const seriesURL = "https://api.themoviedb.org/3/tv/";
const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`;

export const getMovies = () => (dispatch) => {
	dispatch(loading());
	dispatch(getFavourite());
	axios
		.get(moviesURL)
		.then((res) =>
			dispatch({
				type: "GET_MOVIES",
				payload: res.data.results,
			})
		)
		.catch((error) =>
			dispatch({
				type: "MOVIES_ERROR",
			})
		);
};

export const getTrending = () => (dispatch) => {
	dispatch(loading());
	dispatch(getFavourite());
	axios
		.get(trendingURL)
		.then((res) =>
			dispatch({
				type: "GET_TRENDING",
				payload: res.data.results,
			})
		)
		.catch((error) =>
			dispatch({
				type: "TRENDING_ERROR",
			})
		);
};

export const getDetails = (id) => (dispatch) => {
	dispatch(loading());
	dispatch(getFavourite());
	axios
		.get(`${movieURL}${id}?api_key=${API_KEY}`)
		.then((res) => {
			if (!res.ok) {
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
		.catch((error) =>
			dispatch({
				type: "DETAILS_ERROR",
			})
		);
};

export const clearDetails = () => {
	return {
		type: "CLEAR_DETAILS",
	};
};

export const getTvSeries = () => (dispatch) => {
	dispatch(loading());
	dispatch(getFavourite());
	axios
		.get(tvseriesURL)
		.then((res) =>
			dispatch({
				type: "GET_TV_SERIES",
				payload: res.data.results,
			})
		)
		.catch((error) =>
			dispatch({
				type: "SERIES_ERROR",
			})
		);
};

export const getFavourite = () => (dispatch) => {
	if (localStorage.getItem("liked_movies") !== null) {
		const liked_movies = JSON.parse(localStorage.getItem("liked_movies"));
		// const filteredFav = filterfavourite(liked_movies, "id");
		dispatch({
			type: "GET_FAVOURITE",
			payload: liked_movies,
		});
	}
};

export const search = (searchTerm) => (dispatch) => {
	dispatch(loading());

	axios
		.get(searchURL + searchTerm)
		.then((res) => {
			const polished = removePersons(res.data.results);

			dispatch({
				type: "SEARCH",
				payload: polished,
			});
		})
		.catch((error) =>
			dispatch({
				type: "SEARCH_ERROR",
			})
		);
};

export const clearSearchresult = () => {
	return {
		type: "CLEAR_SEARCH",
	};
};

export const loading = () => {
	return {
		type: "LOADING",
	};
};

// Remove persons from the search result
const removePersons = (result) => {
	const polishedResult = result.filter((res) => !res.gender);
	return polishedResult;
};

//Remove duplicate movies saved on local storage
// Got it covered in the MovieCard component now, but i'm still gonna leave it here 😀
const filterfavourite = (localFavourite, property = "id") => {
	const filteredFavourite = [];
	const objectFilter = {};

	for (let i in localFavourite) {
		objectFilter[localFavourite[i][property]] = localFavourite[i];
	}

	for (let i in objectFilter) {
		filteredFavourite.push(objectFilter[i]);
	}

	return filteredFavourite;
};
