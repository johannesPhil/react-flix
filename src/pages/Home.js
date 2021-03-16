import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Movies from "../components/Movies";
import Trending from "../components/Trending";
import TvSeries from "../components/TvSeries";

const Home = () => {
	const [searchField, setSearchField] = useState("");
	const [emptyFieldError, setEmptyFieldError] = useState(false);
	const history = useHistory();

	const inputChange = (e) => {
		setSearchField(e.target.value);
	};

	const searchSubmit = (e) => {
		e.preventDefault();
		if (searchField !== "") {
			history.push({ pathname: "/search", state: searchField });
		} else {
			setEmptyFieldError(true);
		}
	};

	return (
		<div>
			<div className="hero">
				<div className="hero__content">
					<div className="hero__content--text">
						<h1>Welcome!</h1>
						<h3>Discover and explore recent and trending Movies & TV Shows</h3>
					</div>
					<form action="" className="hero__content--form">
						<div className="form__control">
							<input
								type="text"
								name="search"
								id=""
								placeholder="Search..."
								onChange={inputChange}
								className="form__element form__text"
							/>
							<button
								type="submit"
								className="form__element form__btn"
								onClick={searchSubmit}
							>
								Show Me!
							</button>
						</div>
					</form>
					<p>{emptyFieldError ? "Please fill the Search field" : null}</p>
				</div>
			</div>
			<div className="container">
				<div className="category">
					<div className="category__head">
						<h2 className="category__title trending">What's Trending</h2>
						<Link to="/trending" className="category__link">
							View all
						</Link>
					</div>
					<Trending />
				</div>
				<div className="category">
					<div className="category__head">
						<h2 className="category__title movies">Popular Movies</h2>
						<Link to="/movies" className="category__link">
							View all
						</Link>
					</div>
					<Movies />
				</div>
				<div className="category">
					<div className="category__head">
						<h2 className="category__title series">Popular Series</h2>
						<Link to="/tvseries" className="category__link">
							View all
						</Link>
					</div>
					<TvSeries />
				</div>
			</div>
		</div>
	);
};

export default Home;
