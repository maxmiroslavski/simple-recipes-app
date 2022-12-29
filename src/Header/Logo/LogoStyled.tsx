import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoStyled = styled.div`
	.logo {
		display: flex;
		align-items: center;
		font-family: 'Pompiere', cursive;
		color: #967e76;
		font-size: 26px;

		@media (max-width: 500px) {
			font-size: 22px;
		}
	}

	:hover {
		cursor: pointer;
	}

	svg {
		height: 35px;
		width: 35px;
		margin-right: 8px;
		color: #967e76;
	}
`;

const LinkStyled = styled(Link)`
	@media (max-width: 1000px) {
		display: none;
	}
	text-decoration: none;
	color: #967e76;
`;

export { LogoStyled, LinkStyled };
