import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/moviesActions";
import MovieCard from "./MovieCard";

const Movies = () => {
	const dispatch = useDispatch();

	const { movies } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<div>
			{movies === null ? (
				<div className="error">
					<p>Error Fetching List</p>
				</div>
			) : (
				<div className="grid" style={{ margin: "1rem 0" }}>
					{movies.slice(0, 4).map((movie) => (
						<MovieCard data={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Movies;
