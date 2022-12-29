import styled from 'styled-components';

const BurgerMenuStyled = styled.div`
	position: relative;
	@media (min-width: 1000px) {
		display: none;
	}

	svg {
		width: 30px;
		height: 30px;
	}
`;

export { BurgerMenuStyled };
