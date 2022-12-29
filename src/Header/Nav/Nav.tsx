import React from 'react';
import { Link } from 'react-router-dom';

import { NavStyled } from './NavStyled';

const Nav = () => {
	return (
		<NavStyled>
			<ul>
				<li className="menu">
					<button className="item">Cuisines</button>
					<div className="dropdown">
						<Link to={'/cuisine/italian'}>Italian</Link>
						<Link to={'/cuisine/american'}>American</Link>
						<Link to={'/cuisine/french'}>French</Link>
						<Link to={'/cuisine/mexican'}>Mexican</Link>
					</div>
				</li>
				<li className="menu">
					<button className="item">Diet</button>
					<div className="dropdown">
						<Link to={'/diet/vegetarian'}>Vegan</Link>
						<Link to={'/diet/glutenfree'}>Gluten Free</Link>
						<Link to={'/diet/keto'}>Keto</Link>
					</div>
				</li>
				<li className="menu">
					<button className="item">Meals</button>
					<div className="dropdown">
						<Link to={'/meals/breakfast'}>Breakfast</Link>
						<Link to={'/meals/lunch'}>Lunch</Link>
						<Link to={'/meals/dessert'}>Dessert</Link>
						<Link to={'/meals/drinks'}>Drinks</Link>
					</div>
				</li>
				<li className="menu">
					<Link to={'/favorite'}>
						<button className="item">Favorite</button>
					</Link>
				</li>
			</ul>
		</NavStyled>
	);
};

export { Nav };
