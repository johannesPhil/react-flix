import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTvSeries } from "../actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";

const TvSeries = () => {
	const dispatch = useDispatch();
	const { tvseries } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getTvSeries());
	}, [dispatch]);

	return (
		<div className="grid" style={{ margin: "1rem 0" }}>
			{tvseries.slice(0, 8).map((series) => (
				<Link
					to={`/movie/${series.id}`}
					key={series.id}
					className="movie__Link"
				>
					<div className="movieCard">
						<div className="movieCard__poster">
							<img
								src={`http://image.tmdb.org/t/p/w780/${series.poster_path}`}
							></img>
						</div>
						<div className="movieCard__details">
							<p>{series.name}</p>
							<p>
								{new Intl.DateTimeFormat("en-GB", {
									year: "numeric",
									month: "short",
									day: "2-digit",
								}).format(Date.parse(series.first_air_date))}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default TvSeries;
