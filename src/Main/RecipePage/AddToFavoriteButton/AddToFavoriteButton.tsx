import React, { Fragment } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { favoriteActions } from '../../../store/favoriteSlice';

import { addToFavoriteProps } from './AddToFavoriteButtonInterface';

import { FavoriteRecipesInterface } from '../../FavoritePage/FavoriteRecipesInterface';

const AddToFavoriteButton = (props: addToFavoriteProps) => {
	const { title, image, id } = props;

	const dispatch = useDispatch();

	const removeItemFromFavorite = () => {
		dispatch(favoriteActions.removeFromFavorites(id));
	};

	const favoriteRecipesItems = useSelector(
		(state: FavoriteRecipesInterface) => state.favorites.items
	);

	const favoriteRecipesCheck = favoriteRecipesItems.find(
		(item) => item.id === id
	);

	const addItemToFavorite = () => {
		if (favoriteRecipesCheck) {
			return;
		} else {
			dispatch(favoriteActions.addToFavorite({ id, title, image }));
		}
	};

	return (
		<Fragment>
			{!favoriteRecipesCheck && (
				<button onClick={addItemToFavorite}>Add To Favorite</button>
			)}
			{favoriteRecipesCheck && (
				<button onClick={removeItemFromFavorite}>
					Remove From Favorites
				</button>
			)}
		</Fragment>
	);
};

export { AddToFavoriteButton };
