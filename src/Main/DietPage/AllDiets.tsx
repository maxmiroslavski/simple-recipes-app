import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { GlutenFreeDiet } from './GlutenFree';
import { KetoDiet } from './Keto';
import { VegeterianDiet } from './VegetarianDiet';

const AllDiets = () => {
	return (
		<Routes>
			<Route path="/vegetarian" element={<VegeterianDiet />} />
			<Route path="/glutenfree" element={<GlutenFreeDiet />} />
			<Route path="/keto" element={<KetoDiet />} />
		</Routes>
	);
};

export { AllDiets };
