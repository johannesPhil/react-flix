import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../actions/moviesActions";

const Trending = () => {
	const dispatch = useDispatch();
	const { trending } = useSelector((state) => state.movies);
	console.log(trending);

	useEffect(() => {
		dispatch(getTrending());
	}, [dispatch]);

	return (
		<div className="grid" style={{ margin: "1rem 0" }}>
			{trending.slice(0, 8).map((trend) => (
				<Link to={`/movie/${trend.id}`} key={trend.id} className="movie__Link">
					<div className="movieCard">
						<div className="movieCard__poster">
							<img
								src={`http://image.tmdb.org/t/p/w780/${trend.poster_path}`}
							></img>
						</div>
						<div className="movieCard__details">
							{trend.media_type === "movie" ? (
								<div>
									<p>{trend.title}</p>
									<span>Released:</span>
									<span>
										{new Intl.DateTimeFormat("en-GB", {
											year: "numeric",
											month: "short",
											day: "2-digit",
										}).format(Date.parse(trend.release_date))}
									</span>
								</div>
							) : (
								<div>
									<p>{trend.name}</p>
									<span>Air Date:</span>
									<span>
										{new Intl.DateTimeFormat("en-GB", {
											year: "numeric",
											month: "short",
											day: "2-digit",
										}).format(Date.parse(trend.first_air_date))}
									</span>
								</div>
							)}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Trending;
