import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../actions/moviesActions";
import MovieCard from "../components/MovieCard";

const Trending = () => {
	const dispatch = useDispatch();
	const { trending } = useSelector((state) => state.movies);
	console.log(trending);

	useEffect(() => {
		dispatch(getTrending());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="wrapper">
				<div className="grid" style={{ margin: "1rem 0" }}>
					{trending.map((trend) => (
						<MovieCard data={trend} key={trend.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Trending;
