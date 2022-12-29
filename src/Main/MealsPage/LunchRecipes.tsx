import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const LunchRecipes = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=lunch`,
				cuisine: 'lunch',
				title: 'Lunch Recipes',
				description: 'Best ideas for your lunch',
			}}
		/>
	);
};

export { LunchRecipes };
