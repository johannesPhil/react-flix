import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavourite } from "../actions/moviesActions";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
	const dispatch = useDispatch();
	const { favourite } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getFavourite());
	}, [dispatch]);

	return (
		<div className="container">
			{favourite === null ? (
				<div>You dont have any moie/Show saved</div>
			) : (
				<div className="wrapper">
					<div className="category__head">
						<h2 className="category__title movies">Favourites</h2>
					</div>
					<div className="grid" style={{ margin: "1rem 0" }}>
						{favourite.map((fav) => (
							<MovieCard data={fav} key={fav.id} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Favourites;
