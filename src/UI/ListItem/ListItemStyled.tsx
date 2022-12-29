import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItemStyled = styled.li`
	img {
		width: 100%;
	}
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: #967e76;
`;

export { ListItemStyled, LinkStyled };
