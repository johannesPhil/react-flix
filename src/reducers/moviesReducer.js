const initialState = {
	movies: [],
	trending: [],
	tvseries: [],
	details: [],
	// video: [],
	favourite: [],
	searchResult: [],
	error: "",
	loading: false,
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_MOVIES":
			return {
				...state,
				movies: action.payload,
				loading: false,
			};
		case "GET_TRENDING":
			return {
				...state,
				trending: action.payload,
				loading: false,
			};
		case "GET_TV_SERIES":
			return {
				...state,
				tvseries: action.payload,
				loading: false,
			};
		case "GET_DETAILS":
			return {
				...state,
				details: action.payload,
				loading: false,
			};
		case "CLEAR_DETAILS":
			return {
				...state,
				details: [],
			};
		case "GET_FAVOURITE":
			return {
				...state,
				favourite: action.payload,
				loading: false,
			};
		case "SEARCH":
			return {
				...state,
				searchResult: action.payload,
				loading: false,
			};
		case "CLEAR_SEARCH":
			return {
				...state,
				searchResult: [],
			};
		// case "GET_VIDEO":
		// 	return {
		// 		...state,
		// 		video: action.payload,
		// 	};

		case "LOADING":
			return {
				...state,
				loading: true,
			};
		case "DETAILS_ERROR":
			return {
				...state,
				details: null,
				loading: false,
			};
		case "MOVIES_ERROR":
			return {
				...state,
				movies: null,
				loading: false,
			};
		case "TRENDING_ERROR":
			return {
				...state,
				trending: null,
				loading: false,
			};
		case "SERIES_ERROR":
			return {
				...state,
				tvseries: null,
				loading: false,
			};
		case "SEARCH_ERROR":
			return {
				...state,
				searchResult: null,
				loading: false,
			};
		default:
			return state;
	}
};

export default moviesReducer;
