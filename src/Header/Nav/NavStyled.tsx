import styled from 'styled-components';

const NavStyled = styled.nav`
	@media (max-width: 1000px) {
		display: none;
	}

	ul {
		display: flex;
		list-style: none;
		align-items: center;
	}

	ul li {
		padding: 0 15px;
	}

	ul li button {
		font-family: inherit;
		border: none;
		background-color: transparent;
		color: #967e76;
		font-weight: bold;
		font-size: 24px;
	}

	ul li button:hover {
		cursor: pointer;
	}

	ul li a {
		text-decoration: none;
		color: #967e76;
		font-size: 24px;
		font-weight: bold;
	}

	.dropdown {
		padding-top: 5px;
		transform: translateY(-20px);
		opacity: 0;
		position: absolute;
		min-width: 150px;
	}

	.dropdown a {
		padding: 1px 0px;
	}

	.dropdown a:hover {
		transition-duration: 0.1s;
		color: #9facb6;
	}

	.menu {
		position: relative;
	}

	.menu:hover .item {
		text-decoration: underline;
		text-decoration-color: #9facb6;
		text-underline-offset: 3px;
		text-decoration-thickness: 1.5px;
	}

	.menu:hover .dropdown {
		opacity: 1;
		transition: 0.5s;
		transform: translateY(0px);
		display: flex;
		flex-direction: column;
	}
`;

export { NavStyled };
