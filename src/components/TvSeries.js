import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTvSeries } from "../actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const TvSeries = () => {
	const dispatch = useDispatch();
	const { tvseries } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getTvSeries());
	}, [dispatch]);

	return (
		<div>
			{tvseries === null ? (
				<div className="error">
					<p>Error Fetching List</p>
				</div>
			) : (
				<div className="grid" style={{ margin: "1rem 0" }}>
					{tvseries.slice(0, 4).map((series) => (
						<MovieCard data={series} key={series.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default TvSeries;
