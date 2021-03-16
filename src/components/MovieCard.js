import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { getFavourite } from "../actions/moviesActions";
import default_poster from "../assets/default_poster.jpg";

const MovieCard = ({ data }) => {
	const dispatch = useDispatch();
	const { favourite } = useSelector((state) => state.movies);

	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (favourite !== null) {
			favourite.map((fav) => {
				if (fav.id === data.id) {
					setLiked(!liked);
				}
			});
		}
	}, []);

	const like = () => {
		if (localStorage.getItem("liked_movies") == null) {
			let liked_movies = [];
			liked_movies.push(data);
			localStorage.setItem("liked_movies", JSON.stringify(liked_movies));
		} else {
			let liked_movies = JSON.parse(localStorage.getItem("liked_movies"));

			//Check if movie/tvshow is already saved as favourite

			const duplicate = liked_movies.filter((liked) => liked.id === data.id);
			console.log(liked_movies);

			if (Object.keys(duplicate).length >= 1) {
				console.log("dupe");
				duplicate.map((dupe) => {
					console.log(liked_movies.indexOf(dupe));
					liked_movies.splice(liked_movies.indexOf(dupe), 1);
					localStorage.setItem("liked_movies", JSON.stringify(liked_movies));
					dispatch(getFavourite());
				});
			} else {
				console.log(Object.keys(duplicate).length);
				liked_movies.push(data);
				localStorage.setItem("liked_movies", JSON.stringify(liked_movies));
			}
		}
		setLiked(!liked);
	};

	return (
		<div className="movieCard">
			<FeatherIcon
				icon="heart"
				className="favourite"
				fill={liked ? "#562a5a" : "white"}
				color="purple"
				onClick={like}
			/>
			<div className="movieCard__poster">
				<img
					src={
						data.poster_path
							? `http://image.tmdb.org/t/p/original${data.poster_path}`
							: default_poster
					}
					alt=""
				/>
			</div>
			<Link to={`/movie/${data.id}`} className="movie__Link">
				<div className="movieCard__details">
					<p>{data.title ? data.title : data.name}</p>
					<p>
						{data.release_date ? (
							<span>
								{new Intl.DateTimeFormat("en-GB", {
									month: "short",
									year: "numeric",
									day: "2-digit",
								}).format(Date.parse(data.release_date))}
							</span>
						) : (
							<span>
								{data.first_air_date ? (
									<span>
										{new Intl.DateTimeFormat("en-GB", {
											month: "short",
											year: "numeric",
											day: "2-digit",
										}).format(Date.parse(data.first_air_date))}
									</span>
								) : (
									"Release/Air Date N/A"
								)}
							</span>
						)}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
