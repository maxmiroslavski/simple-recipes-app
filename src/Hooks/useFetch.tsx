import { useState, useEffect } from 'react';

export interface useFetchInterface {
	url: string;
	storageName: string;
}

const useFetch = (fetchData: useFetchInterface) => {
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const check = localStorage.getItem(fetchData.storageName);

		if (check) {
			setRecipes(JSON.parse(check));
		} else {
			const api = await fetch(fetchData.url);
			const data = await api.json();

			localStorage.setItem(
				fetchData.storageName,
				JSON.stringify(data.recipes)
			);

			setRecipes(data.recipes);
		}

		setIsLoading(false);
	};

	return {
		recipes,
		isLoading,
	};
};

export { useFetch };
