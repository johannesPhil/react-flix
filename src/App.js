import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import movieStore from "./store";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Trending from "./pages/Trending";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
	return (
		<Provider store={movieStore}>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/trending" component={Trending} exact />
					<Route path="/tvseries" component={TvSeries} exact />
					<Route path="/movies" component={Movies} exact />
					<Route path="/movie/:id" component={Movie} />
					<Route path="/favourites" component={Favourites} />
					<Route path="/search" component={Search} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
