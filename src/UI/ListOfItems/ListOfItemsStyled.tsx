import styled from 'styled-components';

interface styledProps {
	grid: string;
}

const ListOfItemsStyled = styled.div.attrs((props: styledProps) => ({
	grid: props.grid,
}))`
	padding: 50px 0;
	h1 {
		font-size: 55px;
		color: #9facb6;
		text-decoration: underline;
		text-decoration-thickness: 2.5px;
		text-decoration-color: #eee3cb;
		text-underline-offset: 7px;

		@media (max-width: 720px) {
			font-size: 45px;
		}

		@media (max-width: 400px) {
			font-size: 40px;
		}
	}

	p {
		position: relative;
		font-size: 25px;
	}

	ul {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		grid-template-columns: ${(props) => props.grid};
		gap: 40px;
		list-style: none;
		margin-top: 50px;
	}
`;

export { ListOfItemsStyled };
