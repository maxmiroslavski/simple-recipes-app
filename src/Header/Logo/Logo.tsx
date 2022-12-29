import React from 'react';

import { LogoStyled, LinkStyled } from './LogoStyled';

import { GiKnifeFork } from 'react-icons/gi';

const Logo = () => {
	return (
		<LinkStyled to="/">
			<LogoStyled>
				<div className="logo">
					<GiKnifeFork /> Simple <br /> Recipes
				</div>
			</LogoStyled>
		</LinkStyled>
	);
};

export { Logo };
