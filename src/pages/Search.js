import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { clearSearchresult, search } from "../actions/moviesActions";

const Search = () => {
	const dispatch = useDispatch();
	const { searchResult, loading } = useSelector((state) => state.movies);
	console.log(searchResult);
	const location = useLocation();

	useEffect(() => {
		dispatch(search(location.state));

		return function cleanup() {
			dispatch(clearSearchresult());
		};
	}, [location]);
	return (
		<div>
			<Hero />
			<div className="container">
				{searchResult === null ? (
					<div className="error">
						Error encountered in fetching search results
					</div>
				) : (
					<div>
						{loading ? (
							<div className="loader"></div>
						) : (
							<div>
								{searchResult.length <= 0 ? (
									<div className="error">
										Sorry, couldn't find anything related to{" "}
										{`'${location.state}'`}
									</div>
								) : (
									<div className="wrapper">
										<div className="category__head">
											<h2 className="category__title movies">
												Result for {`'${location.state}'`}
											</h2>
										</div>
										<div className="grid" style={{ margin: "1rem 0" }}>
											{searchResult.map((search) => (
												<MovieCard data={search} key={search.id} />
											))}
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
