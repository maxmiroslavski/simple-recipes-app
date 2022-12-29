import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const ItalianCuisine = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=italian`,
				cuisine: 'italian',
				title: 'Italian Cuisine',
				description: 'Our best Italian recipes.',
			}}
		/>
	);
};

export { ItalianCuisine };
