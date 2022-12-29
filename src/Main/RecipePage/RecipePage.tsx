import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

import { RecipeInformationStyled } from './RecipePageStyled';
import { RecipePageInterface } from './RecipePageInterface';
import { AddToFavoriteButton } from './AddToFavoriteButton/AddToFavoriteButton';

const RecipePage = () => {
	let params = useParams();
	const [details, setDetails] = useState<RecipePageInterface>({
		title: '',
		image: '',
		summary: '',
		extendedIngredients: [],
		instructions: '',
		id: 1,
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

	const fetchDetails = async () => {
		const data = await fetch(
			`http://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);

		const detailData = await data.json();
		setDetails(detailData);

		setIsLoading(false);
	};

	const listOfIngredients = details.extendedIngredients.map((ingredient) => (
		<li key={ingredient.id}>{ingredient.original}</li>
	));

	console.log(details);

	const instruction = details.instructions
		.replace(/(<([^>]+)>)/gi, '')
		.trim();

	return (
		<Fragment>
			{!isLoading && (
				<RecipeInformationStyled>
					<motion.div
						initial={{ x: -1500 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.7 }}
						className="recipe_description"
					>
						<h1>{details.title}</h1>
						<img src={details.image} alt="recipe" />
						<h2>Description</h2>
						<p>
							{details.summary
								.replace(/(<([^>]+)>)/gi, '')
								.trim()}
						</p>
						<h2>Ingredients</h2>
						<ul>{listOfIngredients}</ul>
						{details.instructions && (
							<Fragment>
								<h2>How to cook</h2>
								<p>{instruction}</p>
							</Fragment>
						)}
						<AddToFavoriteButton
							title={details.title}
							image={details.image}
							id={details.id}
						/>
					</motion.div>
				</RecipeInformationStyled>
			)}
		</Fragment>
	);
};

export { RecipePage };
