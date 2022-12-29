import React from 'react';

import { HeaderWrapperStyled } from './HeaderStyled';

import { ContainerBounding } from '../../Card/ContainerBounding';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Utilities } from '../Utilities/Utilities';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const Header = () => {
	return (
		<header>
			<ContainerBounding>
				<HeaderWrapperStyled>
					<Logo />
					<BurgerMenu />
					<Nav />
					<Utilities />
				</HeaderWrapperStyled>
			</ContainerBounding>
		</header>
	);
};

export { Header };
