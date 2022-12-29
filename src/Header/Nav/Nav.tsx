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
						<Link to={'/simple-recipes-app/cuisine/italian'}>
							Italian
						</Link>
						<Link to={'/simple-recipes-app/cuisine/american'}>
							American
						</Link>
						<Link to={'/simple-recipes-app/cuisine/french'}>
							French
						</Link>
						<Link to={'/simple-recipes-app/cuisine/mexican'}>
							Mexican
						</Link>
					</div>
				</li>
				<li className="menu">
					<button className="item">Diet</button>
					<div className="dropdown">
						<Link to={'/simple-recipes-app/diet/vegetarian'}>
							Vegan
						</Link>
						<Link to={'/simple-recipes-app/diet/glutenfree'}>
							Gluten Free
						</Link>
						<Link to={'/simple-recipes-app/diet/keto'}>Keto</Link>
					</div>
				</li>
				<li className="menu">
					<button className="item">Meals</button>
					<div className="dropdown">
						<Link to={'/simple-recipes-app/meals/breakfast'}>
							Breakfast
						</Link>
						<Link to={'/simple-recipes-app/meals/lunch'}>
							Lunch
						</Link>
						<Link to={'/simple-recipes-app/meals/dessert'}>
							Dessert
						</Link>
						<Link to={'/simple-recipes-app/meals/drinks'}>
							Drinks
						</Link>
					</div>
				</li>
				<li className="menu">
					<Link to={'/simple-recipes-app/favorite'}>
						<button className="item">Favorite</button>
					</Link>
				</li>
			</ul>
		</NavStyled>
	);
};

export { Nav };
