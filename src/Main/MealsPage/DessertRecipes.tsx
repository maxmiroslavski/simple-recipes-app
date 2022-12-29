import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const DessertRecipes = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=dessert`,
				cuisine: 'dessert',
				title: 'Dessert Recipes',
				description: 'Best ideas for your desserts',
			}}
		/>
	);
};

export { DessertRecipes };
