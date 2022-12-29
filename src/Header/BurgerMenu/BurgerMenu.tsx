import React from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

import { BurgerMenuStyled } from './BurgerMenuStyled';

const BurgerMenu = () => {
	return (
		<BurgerMenuStyled>
			<RxHamburgerMenu />
		</BurgerMenuStyled>
	);
};

export { BurgerMenu };
