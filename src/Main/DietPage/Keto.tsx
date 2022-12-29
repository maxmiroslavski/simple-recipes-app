import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const KetoDiet = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=keto`,
				cuisine: 'keto',
				title: 'Keto Diet Recipes',
				description:
					'Recipes that high in fat and low in carbohydrates.',
			}}
		/>
	);
};

export { KetoDiet };
