import styled from 'styled-components';

const UtilitiesStyled = styled.div`
	display: flex;
	align-items: center;
`;

const SearchBarInputButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	outline: none;
	background: none;
	/* margin-top: 7px; */
	color: #967e76;
	/* margin-bottom: 5px; */
	position: relative;

	.logo_container {
		position: absolute;
		right: 10px;
		z-index: 10;
	}

	svg {
		width: 27px;
		height: 27px;
	}

	svg:hover {
		color: #9facb6;
		cursor: pointer;
		transition: 0.4s;
	}

	button svg:hover form input {
		display: none;
	}
`;

export { UtilitiesStyled, SearchBarInputButton };
