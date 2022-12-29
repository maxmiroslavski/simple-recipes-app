// import React, { Fragment } from 'react';

// import { ListOfItems } from '../../UI/ListOfItems/ListOfItems';

// import { useFetch } from '../../Hooks/useFetch';

// const useFetchData = {
// 	url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16`,
// 	storageName: 'popular',
// };

// const MostSaved = () => {
// 	const { recipes: mostSavedRecipes, isLoading } = useFetch(useFetchData);

// 	return (
// 		<Fragment>
// 			{isLoading && <ListOfItems
// 				data={{
// 					listOfRecipes: mostSavedRecipes,
// 					title: 'Our Most-Saved Recipes',
// 					description:
// 						'The dishes that are really popular right now.',
// 					isLoading,
// 				}}
// 			/>}
// 		</Fragment>
// 	);
// };

// export { MostSaved };

import React from 'react';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

const MostSaved = () => {
	return (
		<FilteredItems
			data={{
				url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`,
				cuisine: 'popular',
				title: 'Our Most-Saved Recipes',
				description: 'The dishes that are really popular right now.',
			}}
		/>
	);
};

export { MostSaved };
