import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favoriteSlice';

const store = configureStore({
	reducer: { favorites: favoriteSlice.reducer },
});

export { store };
