import React, { Fragment } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ResponsiveMenuStyled } from './ResponsiveMenuStyled';

import { DropDownMenu } from './DropDownMenu';

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

	const cuisineData = [
		{
			title: 'Italian',
			link: '/cuisine/italian',
		},
		{
			title: 'American',
			link: '/cuisine/american',
		},
		{
			title: 'French',
			link: '/cuisine/french',
		},
		{
			title: 'Mexican',
			link: '/cuisine/mexican',
		},
	];

	const dietData = [
		{
			title: 'Vegan',
			link: '/diet/vegetarian',
		},
		{
			title: 'Gluten Free',
			link: '/diet/glutenfree',
		},
		{
			title: 'Keto',
			link: '/diet/keto',
		},
	];

	const mealData = [
		{
			title: 'Breakfast',
			link: '/meals/breakfast',
		},
		{
			title: 'Lunch',
			link: '/meals/lunch',
		},
		{
			title: 'Dinner',
			link: '/meals/dessert',
		},
		{
			title: 'Drinks',
			link: '/meals/drinks',
		},
	];

	return (
		<Fragment>
			{iconSwitch && (
				<ResponsiveMenuStyled>
					<motion.ul
						key="list"
						initial={{ x: -200 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.4, type: 'spring' }}
						className="menu"
					>
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
							{showCuisine && <DropDownMenu data={cuisineData} />}
						</li>
						<li>
							<span
								className="menu_item"
								onClick={showDietHandler}
							>
								Diet
							</span>
							{showDiet && <DropDownMenu data={dietData} />}
						</li>
						<li>
							<span
								className="menu_item"
								onClick={showMealHandler}
							>
								Meal
							</span>
							{showMeal && <DropDownMenu data={mealData} />}
						</li>
						<li>
							<Link onClick={favoriteClickHandler} to="/favorite">
								Favorites
							</Link>
						</li>
					</motion.ul>
				</ResponsiveMenuStyled>
			)}
		</Fragment>
	);
};

export { ResponsiveMenu };
