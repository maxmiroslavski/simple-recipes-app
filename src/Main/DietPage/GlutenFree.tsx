import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const GlutenFreeDiet = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=gluten free`,
				cuisine: 'gluten free',
				title: 'Gluten Free Recipes',
				description: 'Amazing dishes for gluten free diet.',
			}}
		/>
	);
};

export { GlutenFreeDiet };
