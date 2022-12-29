import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import { ListOfItems } from '../../UI/ListOfItems/ListOfItems';

import { FavoriteRecipesInterface } from './FavoriteRecipesInterface';

const FavoriteRecipes = () => {
	const favoriteItems = useSelector(
		(state: FavoriteRecipesInterface) => state.favorites.items
	);

	console.log(favoriteItems);

	return (
		<Fragment>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<ListOfItems
					data={{
						listOfRecipes: favoriteItems,
						title: 'Favorite Recipes',
						description: 'Your saved recipes.',
						isLoading: false,
					}}
				/>
			</motion.div>
		</Fragment>
	);
};

export { FavoriteRecipes };
