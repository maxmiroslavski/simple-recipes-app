import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const FrenchCuisine = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=french`,
				cuisine: 'french',
				title: 'French Cuisine',
				description: 'Our best French recipes.',
			}}
		/>
	);
};

export { FrenchCuisine };
