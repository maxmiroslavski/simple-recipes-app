import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const VegeterianDiet = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=vegan`,
				cuisine: 'vegan',
				title: 'Vegan Recipes',
				description: 'Recipes for vegans.',
			}}
		/>
	);
};

export { VegeterianDiet };
