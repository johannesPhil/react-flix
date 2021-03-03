import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/moviesActions";

import {
	CircularProgressbar,
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

const Movie = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { details, loading, error } = useSelector((state) => state.movies);
	console.log(details);
	useEffect(() => {
		dispatch(getDetails(id));
	}, [dispatch, id]);

	return (
		<div>
			{details === null ? (
				<p>Sorry</p>
			) : (
				<div>
					{loading ? (
						<div className="loader"></div>
					) : (
						<div
							style={{
								backgroundImage: `url(http://image.tmdb.org/t/p/w780${details.backdrop_path})`,
							}}
							className="movie"
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
									{details.genres ? (
										<div className="genres desc__text">
											<h3>Genres:</h3>
											{details.genres.map((genre) => (
												<div className="genres__container">
													<div className="genre">{genre.name}</div>
												</div>
											))}
										</div>
									) : null}

									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										{details.runtime ? (
											<p className="desc__text">
												Runtime: {details.runtime} mins
											</p>
										) : null}
										{details.vote_average ? (
											<div style={{ width: "70px", height: "70px" }}>
												<VisibilitySensor>
													{({ isVisible }) => {
														const rating = isVisible
															? details.vote_average * 10
															: 0;
														return (
															<CircularProgressbarWithChildren
																value={rating}
																strokeWidth={10}
																styles={buildStyles({
																	rotation: 1,

																	// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
																	strokeLinecap: "round",

																	// Text size
																	textSize: "16px",

																	// How long animation takes to go from one percentage to another, in seconds
																	pathTransitionDuration: 3,

																	// Can specify path transition in more detail, or remove it entirely
																	// pathTransition: 'none',

																	// Colors
																	pathColor: "#ff2901",
																	textColor: "#ff2901",
																	trailColor: "#fff",
																	backgroundColor: "#ff2901",
																	strokeWidth: "100",
																})}
															>
																{/* <strong>Rating</strong> */}
																<strong style={{ color: "#ff2901" }}>
																	{rating}%
																</strong>
															</CircularProgressbarWithChildren>
														);
													}}
												</VisibilitySensor>
											</div>
										) : null}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Movie;
