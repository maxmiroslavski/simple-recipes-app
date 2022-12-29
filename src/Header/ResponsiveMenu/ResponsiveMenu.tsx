import React, { Fragment } from 'react';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ResponsiveMenuStyled } from './ResponsiveMenuStyled';

import { SubmenuContainer } from '../../Card/SubmenuContainer';

const ResponsiveMenu = (props: { iconSwitch: boolean }) => {
	const [onHomePage, setOnHomePage] = useState(false);
	const [showCuisine, setShowCuisine] = useState(false);
	const [showDiet, setShowDiet] = useState(false);
	const [showMeal, setShowMeal] = useState(false);
	const [onFavorite, setOnFavorite] = useState(false);

	const { iconSwitch } = props;

	const homePageClickHandler = () => {
		setShowCuisine(false);
		setShowDiet(false);
		setShowMeal(false);
		setOnHomePage(!onHomePage);
	};

	const showCuisineHandler = () => {
		setShowDiet(false);
		setShowMeal(false);
		setShowCuisine(!showCuisine);
	};

	const showDietHandler = () => {
		setShowCuisine(false);
		setShowMeal(false);
		setShowDiet(!showDiet);
	};

	const showMealHandler = () => {
		setShowCuisine(false);
		setShowDiet(false);
		setShowMeal(!showMeal);
	};

	const favoriteClickHandler = () => {
		setShowCuisine(false);
		setShowDiet(false);
		setShowMeal(false);
		setOnFavorite(!onFavorite);
	};

	return (
		<Fragment>
			{iconSwitch && (
				<ResponsiveMenuStyled>
					<ul className="menu">
						<li>
							<Link to="/" onClick={homePageClickHandler}>
								Home
							</Link>
						</li>
						<li>
							<span
								className="menu_item"
								onClick={showCuisineHandler}
							>
								Cuisine
							</span>
							{showCuisine && (
								<SubmenuContainer>
									<li>
										<Link to="/cuisine/italian">
											Italian
										</Link>
									</li>
									<li>
										<Link to="/cuisine/american">
											American
										</Link>
									</li>
									<li>
										<Link to="/cuisine/french">French</Link>
									</li>
									<li>
										<Link to="/cuisine/mexican">
											Mexican
										</Link>
									</li>
								</SubmenuContainer>
							)}
						</li>
						<li>
							<span
								className="menu_item"
								onClick={showDietHandler}
							>
								Diet
							</span>
							{showDiet && (
								<SubmenuContainer>
									<li>
										<Link to="/diet/vegetarian">Vegan</Link>
									</li>
									<li>
										<Link to="/diet/glutenfree">
											Gluten Free
										</Link>
									</li>
									<li>
										<Link to="/diet/keto">Keto</Link>
									</li>
								</SubmenuContainer>
							)}
						</li>
						<li>
							<span
								className="menu_item"
								onClick={showMealHandler}
							>
								Meal
							</span>
							{showMeal && (
								<SubmenuContainer>
									<li>
										<Link to="/meals/breakfast">
											Breakfast
										</Link>
									</li>
									<li>
										<Link to="/meals/lunch">Lunch</Link>
									</li>
									<li>
										<Link to="/meals/dessert">Dessert</Link>
									</li>
									<li>
										<Link to="/meals/drinks">Drinks</Link>
									</li>
								</SubmenuContainer>
							)}
						</li>
						<li>
							<Link onClick={favoriteClickHandler} to="/favorite">
								Favorites
							</Link>
						</li>
					</ul>
				</ResponsiveMenuStyled>
			)}
		</Fragment>
	);
};

export { ResponsiveMenu };
