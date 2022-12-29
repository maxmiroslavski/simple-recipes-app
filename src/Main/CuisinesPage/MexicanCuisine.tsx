import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const MexicanCuisine = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=mexican`,
				cuisine: 'mexican',
				title: 'Mexican Cuisine',
				description: 'Our best Mexican recipes.',
			}}
		/>
	);
};

export { MexicanCuisine };
