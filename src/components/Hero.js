import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Hero = () => {
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
	);
};

export default Hero;
