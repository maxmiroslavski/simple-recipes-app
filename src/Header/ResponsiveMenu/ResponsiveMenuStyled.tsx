import styled from 'styled-components';

const ResponsiveMenuStyled = styled.div`
	.menu {
		font-size: 34px;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	li:hover {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
		font-size: inherit;
	}

	.sub_menu {
		color: #9facb6;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 26px;
		padding-left: 8px;
		list-style: none;
	}

	.sub_menu li {
		padding: 1px 0;
	}
`;

export { ResponsiveMenuStyled };
