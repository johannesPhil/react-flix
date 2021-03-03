import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Movies from "../components/Movies";
import Trending from "../components/Trending";
import TvSeries from "../components/TvSeries";

const Home = () => {
	// const { loading } = useSelector((state) => state.movies);

	// useEffect(() => {}, [loading]);

	return (
		<div className="container">
			<div className="category">
				<h2>Trending</h2>
				<Trending />
				<Link to="/trending">view all</Link>
			</div>
			<div className="category">
				<h2>Movies</h2>
				<Movies />
				<Link to="/movies">view all</Link>
			</div>
			<div className="category">
				<h2>Series</h2>
				<TvSeries />
				<Link to="/tvseries">view all</Link>
			</div>
		</div>
	);
};

export default Home;
