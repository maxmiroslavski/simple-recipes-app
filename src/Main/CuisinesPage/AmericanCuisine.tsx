import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const AmericanCuisine = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=american`,
				cuisine: 'american',
				title: 'American Cuisine',
				description: 'Our best American recipes.',
			}}
		/>
	);
};

export { AmericanCuisine };
