import React, { useEffect, useState } from "react";
import "../App.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/moviesActions";
import MovieCard from "../components/MovieCard";

const Movies = () => {
	const dispatch = useDispatch();

	const { movies } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovies());
	}, []);

	return (
		<div className="container">
			<div className="wrapper">
				<div className="grid" style={{ margin: "1rem 0" }}>
					{movies.map((movie) => (
						<MovieCard data={movie} key={movie.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Movies;
