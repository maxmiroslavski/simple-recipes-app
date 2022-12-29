import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BreakfastRecipes } from './BreakfastRecipes';
import { DessertRecipes } from './DessertRecipes';
import { DrinkRecipes } from './DrinkRecipes';
import { LunchRecipes } from './LunchRecipes';

const AllMeals = () => {
	return (
		<Routes>
			<Route path="/breakfast" element={<BreakfastRecipes />} />
			<Route path="/lunch" element={<LunchRecipes />} />
			<Route path="/dessert" element={<DessertRecipes />} />
			<Route path="/drinks" element={<DrinkRecipes />} />
		</Routes>
	);
};

export { AllMeals };
