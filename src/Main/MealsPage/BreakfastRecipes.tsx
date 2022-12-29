import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const BreakfastRecipes = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=breakfast`,
				cuisine: 'breakfast',
				title: 'Breakfast Recipes',
				description: 'Best ideas for your breakfast',
			}}
		/>
	);
};

export { BreakfastRecipes };
