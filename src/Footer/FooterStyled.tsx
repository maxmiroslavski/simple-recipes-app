import styled from 'styled-components';

const FooterStyled = styled.footer`
	margin-top: 20px;
`;

const FooterWrapperStyled = styled.div`
	padding: 25px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 420px) {
		flex-direction: column;
	}

	.copyright {
		font-size: 20px;
		display: flex;
		align-items: center;
		padding-bottom: 2px;

		@media (max-width: 420px) {
			padding-top: 12px;
		}
	}
`;

const SocialMedia = styled.ul`
	list-style: none;
	display: flex;

	li {
		display: flex;
		align-items: center;
		padding: 0 10px;
	}

	li:first-child {
		padding-left: 0;
	}

	li:hover {
		cursor: pointer;
	}

	li svg {
		width: 30px;
		height: 30px;
	}

	li svg:hover {
		transition-duration: 0.1s;
		color: #b7c4cf;
	}
`;

export { FooterStyled, FooterWrapperStyled, SocialMedia };
