const initialState = {
	movies: [],
	trending: [],
	tvseries: [],
	details: [],
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
		case "ERROR":
			return {
				...state,
				details: null,
				loading: false,
			};
		case "LOADING":
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default moviesReducer;
