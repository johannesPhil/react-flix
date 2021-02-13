import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const Trending = () => {
	const dispatch = useDispatch();
	const { trending } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(allActions.moviesActions.getTrending());
	}, []);

	return (
		<div className="grid" style={{ margin: "1rem 0" }}>
			{trending.slice(0, 8).map((trend) => (
				<Link to={`/movie/${trend.id}`} key={trend.id}>
					<div className="movieCard">
						<div className="movieCard__poster">
							<img
								src={`http://image.tmdb.org/t/p/w780/${trend.poster_path}`}
							></img>
						</div>
						<div className="movieCard__details">
							<p>{trend.title}</p>
							{trend.release_date ? (
								<p>
									{new Intl.DateTimeFormat("en-GB", {
										year: "numeric",
										month: "short",
										day: "2-digit",
									}).format(Date.parse(trend.release_date))}
								</p>
							) : (
								<p>
									{new Intl.DateTimeFormat("en-GB", {
										year: "numeric",
										month: "short",
										day: "2-digit",
									}).format(Date.parse(trend.first_air_date))}
								</p>
							)}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Trending;
