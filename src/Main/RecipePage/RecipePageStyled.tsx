import styled from 'styled-components';

const RecipeInformationStyled = styled.div`
	padding-top: 65px;
	display: flex;
	flex-direction: column;
	align-items: center;

	button {
		border: none;
		outline: none;
		font-family: 'Pompiere', cursive;
		background-color: #967e76;
		color: #fff;
		padding: 10px;
		font-size: 30px;
		border-radius: 15px;
		margin-top: 20px;
	}

	button:hover {
		background-color: #bb9d93;
		cursor: pointer;
		transition-duration: 0.15s;
	}

	h1 {
		font-family: 'Pompiere', cursive;
		text-align: left;
		font-size: 60px;
		text-decoration: underline;
		text-decoration-thickness: 2.5px;
		text-decoration-color: #eee3cb;
		text-underline-offset: 7px;
		@media (max-width: 500px) {
			font-size: 45px;
		}
	}

	h2 {
		font-family: 'Pompiere', cursive;
		margin: 15px 0 10px;
		font-size: 45px;
		text-decoration: underline;
		text-decoration-thickness: 2.5px;
		text-decoration-color: #eee3cb;
		text-underline-offset: 4px;
		@media (max-width: 500px) {
			font-size: 35px;
		}
	}

	.recipe_description {
		max-width: 550px;
		font-size: 22px;
		@media (max-width: 500px) {
			font-size: 18px;
		}
	}

	img {
		width: 100%;
		box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
		margin-top: 10px;
		border-radius: 10px;
	}
	p {
		line-height: 30px;
		margin: 5px 0;
	}

	ul {
		margin-left: 23px;
		margin-bottom: 20px;
	}
`;

export { RecipeInformationStyled };
