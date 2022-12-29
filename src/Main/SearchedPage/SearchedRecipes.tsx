import React, { Fragment } from 'react';

import { ListOfItems } from '../../UI/ListOfItems/ListOfItems';

import { FilteredItems } from '../../UI/FilteredItems/FilteredItems';

import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchedRecipes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [searched, setSearched] = useState([]);
	let params = useParams();

	const getSearched = async (name: string | undefined) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);
		const recipes = await data.json();

		setSearched(recipes.results);

		setIsLoading(false);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<Fragment>
			{!isLoading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<ListOfItems
						data={{
							listOfRecipes: searched,
							title: 'Searched Recipes',
							description: 'Found recipes',
							isLoading,
						}}
					/>
				</motion.div>
			)}
		</Fragment>
	);
};

export { SearchedRecipes };
