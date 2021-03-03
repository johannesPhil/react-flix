import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/moviesActions";

const Movies = () => {
	const dispatch = useDispatch();

	const { movies } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<div className="grid" style={{ margin: "1rem 0" }}>
			{movies.slice(0, 8).map((movie) => (
				<Link to={`/movie/${movie.id}`} key={movie.id} className="movie__Link">
					<div className="movieCard">
						<div className="movieCard__poster">
							<img
								src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
							></img>
						</div>
						<div className="movieCard__details">
							<p>{movie.title}</p>
							<p>
								{new Intl.DateTimeFormat("en-GB", {
									month: "short",
									year: "numeric",
									day: "2-digit",
								}).format(Date.parse(movie.release_date))}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Movies;
