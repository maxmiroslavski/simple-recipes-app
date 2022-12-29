import styled from 'styled-components';

const HeaderWrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 85px;

	@media (max-width: 1000px) {
		height: 75px;
	}
`;

export { HeaderWrapperStyled };
