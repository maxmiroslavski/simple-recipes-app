import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const DrinkRecipes = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=drink`,
				cuisine: 'drink',
				title: 'Drink Recipes',
				description: 'Best ideas for your drinks',
			}}
		/>
	);
};

export { DrinkRecipes };
