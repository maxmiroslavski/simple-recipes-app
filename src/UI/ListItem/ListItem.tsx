import React from 'react';

import { ListItemStyled, LinkStyled } from './ListItemStyled';

import { ListItemProps } from './ListItemInterface';

const ListItem = (props: ListItemProps) => {
	const { title, image, id } = props.data;

	return (
		<LinkStyled to={'/recipe/' + id}>
			<ListItemStyled>
				<img src={image} alt="recipe" />
				<h3>{title}</h3>
			</ListItemStyled>
		</LinkStyled>
	);
};

export { ListItem };
