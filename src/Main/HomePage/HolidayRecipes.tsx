// import React, { Fragment } from 'react';

// import { ListOfItems } from '../../UI/ListOfItems/ListOfItems';

// import { useFetch } from '../../Hooks/useFetch';

// const useFetchData = {
// 	url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=dessert`,
// 	storageName: 'holiday',
// 	useEffectDependency: null,
// };

// const HolidayRecipes = () => {
// 	const { recipes: holidayRecipes, isLoading } = useFetch(useFetchData);

// 	return (
// 		<Fragment>
// 			<ListOfItems
// 				data={{
// 					listOfRecipes: holidayRecipes,
// 					title: 'Holiday Party Recipes',
// 					description: 'Recipes that bring on the festive feelings.',
// 					isLoading,
// 				}}
// 			/>
// 		</Fragment>
// 	);
// };

// export { HolidayRecipes };

import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const HolidayRecipes = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=dessert`,
				cuisine: 'holiday',
				title: 'Holiday Party Recipes',
				description: 'Recipes that bring on the festive feelings.',
			}}
		/>
	);
};

export { HolidayRecipes };
