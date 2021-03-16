import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTvSeries } from "../actions/moviesActions";
import MovieCard from "../components/MovieCard";

const TvSeries = () => {
	const dispatch = useDispatch();
	const { tvseries } = useSelector((state) => state.movies);
	console.log(tvseries);

	useEffect(() => {
		dispatch(getTvSeries());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="wrapper">
				<div className="grid" style={{ margin: "1rem 0" }}>
					{tvseries.map((tvseries) => (
						<MovieCard data={tvseries} key={tvseries.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TvSeries;
