import styled from 'styled-components';

const FormStyled = styled.form`
	input {
		position: absolute;
		right: 0;
		bottom: -21px;
		font-family: 'Rubik', sans-serif;
		font-size: 20px;
		font-weight: bold;
		border: 1.5px solid #967e76;
		border-radius: 20px;
		color: #967e76;
		padding: 8px 12px;
		outline: none;
		background: transparent;
		margin-right: 2px;
		border-bottom: 1px solid #967e76;
		z-index: 1;
		width: 220px;
		opacity: 1;

		@media (max-width: 350px) {
			width: 180px;
		}
	}

	svg:hover input {
		opacity: 0;
	}
`;

export { FormStyled };
