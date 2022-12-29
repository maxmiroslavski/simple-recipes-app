import React from 'react';

import { SubmenuContainer } from '../../Card/SubmenuContainer';

import { Link } from 'react-router-dom';

interface SubmenuProps {
	data: {
		title: string;
		link: string;
	}[];
}

const DropDownMenu = (props: SubmenuProps) => {
	const { data } = props;

	const listOfLinks = data.map((item) => (
		<li>
			<Link to={item.link}>{item.title}</Link>
		</li>
	));

	return <SubmenuContainer>{listOfLinks}</SubmenuContainer>;
};

export { DropDownMenu };
