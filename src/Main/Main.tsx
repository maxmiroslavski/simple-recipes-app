import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

import styled from 'styled-components';

import { ContainerBounding } from '../Card/ContainerBounding';
import { HomePage } from './HomePage/HomePage';
import { RecipePage } from './RecipePage/RecipePage';

import { AllCuisines } from './CuisinesPage/AllCuisines';
import { AllDiets } from './DietPage/AllDiets';
import { AllMeals } from './MealsPage/AllMeals';
import { SearchedRecipes } from './SearchedPage/SearchedRecipes';
import { FavoriteRecipes } from './FavoritePage/FavoriteRecipes';
import ScrollToTop from './ScrollToTop';

const Main = () => {
	return (
		<MainStyled>
			<ContainerBounding>
				<ScrollToTop />
				<Routes>
					<Route path="/simple-recipes-app/" element={<HomePage />} />
					<Route
						path="/simple-recipes-app/recipe/:name"
						element={<RecipePage />}
					/>
					<Route
						path="/simple-recipes-app/cuisine/*"
						element={<AllCuisines />}
					/>
					<Route
						path="/simple-recipes-app/diet/*"
						element={<AllDiets />}
					/>
					<Route
						path="/simple-recipes-app/meals/*"
						element={<AllMeals />}
					/>
					<Route
						path="/simple-recipes-app/favorite/"
						element={<FavoriteRecipes />}
					/>
					<Route
						path="/simple-recipes-app/searched/:search"
						element={<SearchedRecipes />}
					/>
				</Routes>
			</ContainerBounding>
		</MainStyled>
	);
};

const MainStyled = styled.main`
	padding-top: 120px;
	min-height: 100vh;
`;

export { Main };
