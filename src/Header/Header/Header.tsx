import React from 'react';

import { useState } from 'react';

import { HeaderWrapperStyled } from './HeaderStyled';

import { ContainerBounding } from '../../Card/ContainerBounding';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Utilities } from '../Utilities/Utilities';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ResponsiveMenu } from '../ResponsiveMenu/ResponsiveMenu';

const Header = () => {
	const [iconSwitch, setIconSwitch] = useState(false);
	return (
		<header>
			<ContainerBounding>
				<HeaderWrapperStyled>
					<Logo />
					<BurgerMenu
						iconSwitch={iconSwitch}
						setIconSwitch={setIconSwitch}
					/>
					<Nav />
					<Utilities />
				</HeaderWrapperStyled>
				<ResponsiveMenu iconSwitch={iconSwitch} />
			</ContainerBounding>
		</header>
	);
};

export { Header };
