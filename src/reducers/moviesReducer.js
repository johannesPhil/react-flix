const initialState = {
	movies: [],
	trending: [],
	tvseries: [],
	details: [],
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_MOVIES":
			return {
				...state,
				movies: action.payload,
			};
		case "GET_TRENDING":
			return {
				...state,
				trending: action.payload,
			};
		case "GET_TV_SERIES":
			return {
				...state,
				tvseries: action.payload,
			};
		case "GET_DETAILS":
			return {
				...state,
				details: action.payload,
			};
		default:
			return state;
	}
};

export default moviesReducer;
