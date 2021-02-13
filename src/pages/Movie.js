import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const Movie = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { details } = useSelector((state) => state.movies);
	console.log(details);
	useEffect(() => {
		dispatch(allActions.moviesActions.getDetails(id));
	}, [dispatch, id]);
	return details.length < 1 ? (
		<div>Sorry</div>
	) : (
		<div
			style={{
				backgroundImage: `url(http://image.tmdb.org/t/p/original${details.backdrop_path})`,
			}}
			className="wrapper"
		>
			<div className="details">
				<div className="poster">
					<img
						src={`http://image.tmdb.org/t/p/original${details.poster_path}`}
						alt=""
					/>
				</div>
				<div className="desc">
					{details.title ? (
						<h2 className="desc__heading"> {details.title} </h2>
					) : (
						<h2 className="desc__heading"> {details.name} </h2>
					)}

					<p className="desc__text tagline">{details.tagline} </p>
					<h3 className="desc__heading">Overview</h3>
					<p className="desc__text">{details.overview}</p>
					<div className="desc__text">
						<span>Genres:</span>
						{details.genres.map((genre) => (
							<span>{genre.name}</span>
						))}
					</div>
					<p className="desc__text">Runtime: {details.runtime} mins</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
