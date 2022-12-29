import React from 'react';

import { motion } from 'framer-motion';

import { MostSaved } from './MostSaved';
import { HolidayRecipes } from './HolidayRecipes';

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<MostSaved />
			<HolidayRecipes />
		</motion.div>
	);
};

export { HomePage };
