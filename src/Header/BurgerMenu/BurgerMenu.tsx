import React from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

import { IoMdClose } from 'react-icons/io';

import { BurgerMenuStyled } from './BurgerMenuStyled';

interface BurgerMenuProps {
	iconSwitch: boolean;
	setIconSwitch: (value: boolean) => void;
}

const BurgerMenu = (props: BurgerMenuProps) => {
	const { iconSwitch, setIconSwitch } = props;

	return (
		<BurgerMenuStyled onClick={() => setIconSwitch(!iconSwitch)}>
			{!iconSwitch && <RxHamburgerMenu />}
			{iconSwitch && <IoMdClose />}
		</BurgerMenuStyled>
	);
};

export { BurgerMenu };
