import React, { Fragment } from 'react';
import { ListOfItemsProps } from './ListOfItemsInterface';
import { ListOfItemsStyled } from './ListOfItemsStyled';
import { ListItem } from '../ListItem/ListItem';

const ListOfItems = (props: ListOfItemsProps) => {
	const { listOfRecipes, title, description, isLoading } = props.data;

	const filteredItems = listOfRecipes.filter(
		(recipe) =>
			recipe.image &&
			recipe.title !== 'Boozy Bbq Chicken' &&
			recipe.title !== 'The Scotch Egg'
	);

	console.log(filteredItems);

	const listOfItems = filteredItems.map((recipe) => (
		<ListItem
			key={recipe.id}
			data={{ id: recipe.id, title: recipe.title, image: recipe.image }}
		/>
	));

	const listOfItemsLength = listOfItems.length;

	let gridSettings;

	if (listOfItemsLength > 3) {
		gridSettings = 'repeat(auto-fit, minmax(250px, 1fr))';
	} else {
		gridSettings = 'repeat(auto-fit, minmax(250px, 400px))';
	}

	return (
		// <ListOfItemsStyled grid={gridSettings}>
		// 	{!isLoading && (
		// 		<h1>{listOfItems.length !== 0 ? title : 'No items found.'}</h1>
		// 	)}
		// 	<p>{description}</p>
		// 	{!isLoading && <ul>{listOfItems}</ul>}
		// </ListOfItemsStyled>
		<Fragment>
			<ListOfItemsStyled grid={gridSettings}>
				<h1>{listOfItems.length !== 0 ? title : 'No items found.'}</h1>
				<p>{description}</p>
				<ul>{listOfItems}</ul>
			</ListOfItemsStyled>
		</Fragment>
	);
};

export { ListOfItems };
