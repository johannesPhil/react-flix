import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWare = [thunk];
const movieStore = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(...middleWare)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default movieStore;
