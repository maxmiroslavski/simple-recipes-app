import React, { Fragment } from 'react';

import { AmericanCuisine } from './AmericanCuisine';
import { FrenchCuisine } from './FrenchCuisine';
import { ItalianCuisine } from './ItalianCuisine';
import { MexicanCuisine } from './MexicanCuisine';

import { Route, Routes } from 'react-router-dom';

const AllCuisines = () => {
	return (
		<Routes>
			<Route path="/italian" element={<ItalianCuisine />} />
			<Route path="/american" element={<AmericanCuisine />} />
			<Route path="/french" element={<FrenchCuisine />} />
			<Route path="/mexican" element={<MexicanCuisine />} />
		</Routes>
	);
};

export { AllCuisines };
