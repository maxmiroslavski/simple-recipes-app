import { createSlice } from '@reduxjs/toolkit';

import { useState } from 'react';
interface ItemsInterface {
	id: number;
	image: string;
	title: string;
}

const updatedItems =
	localStorage.getItem('favorite') !== null
		? JSON.parse(localStorage.getItem('favorite') || '[]')
		: [];

const initialState = {
	items: updatedItems as ItemsInterface[],
};

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			const check = localStorage.getItem('favorite');

			if (check) {
				JSON.parse(check);
			}

			const newItem = action.payload;
			state.items.push({
				id: newItem.id,
				title: newItem.title,
				image: newItem.image,
			});

			localStorage.setItem('favorite', JSON.stringify(state.items));
		},
		removeFromFavorites(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				state.items = state.items.filter((item) => item.id !== id);
			}

			localStorage.setItem('favorite', JSON.stringify(state.items));
		},
	},
});

const favoriteActions = favoriteSlice.actions;

export { favoriteSlice, favoriteActions };
