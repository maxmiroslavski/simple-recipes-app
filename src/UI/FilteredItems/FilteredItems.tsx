import React, { Fragment } from 'react';

import { ListOfItems } from '../ListOfItems/ListOfItems';

import { motion } from 'framer-motion';

import { useFetch } from '../../Hooks/useFetch';

import { FilteredCuisinePropsInterface } from './FilteredItemsInterface';

const FilteredItems = (props: FilteredCuisinePropsInterface) => {
	const { title, description, cuisine, url } = props.data;

	const useFetchData = {
		url: url,
		storageName: `${cuisine}`,
	};

	const { recipes, isLoading } = useFetch(useFetchData);

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
							listOfRecipes: recipes,
							title,
							description,
							isLoading,
						}}
					/>
				</motion.div>
			)}
		</Fragment>
	);
};

export { FilteredItems };
