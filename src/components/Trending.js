import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../actions/moviesActions";
import MovieCard from "./MovieCard";

const Trending = () => {
	const dispatch = useDispatch();
	const { trending } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getTrending());
	}, [dispatch]);

	return (
		<div>
			{trending === null ? (
				<div className="error">
					<p>Error Fetching List</p>
				</div>
			) : (
				<div className="grid" style={{ margin: "1rem 0" }}>
					{trending.slice(0, 4).map((trend) => (
						<MovieCard data={trend} key={trend.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Trending;
