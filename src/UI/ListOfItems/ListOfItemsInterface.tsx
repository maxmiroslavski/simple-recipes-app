export interface ListOfItemsProps {
	data: {
		listOfRecipes: { title: string; image: string; id: number }[];
		title: string;
		description: string;
		isLoading: boolean;
	};
}
