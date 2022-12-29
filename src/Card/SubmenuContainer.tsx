import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

interface ChildrenProps {
	children: React.ReactNode;
}

const SubmenuContainer = (props: ChildrenProps) => {
	return (
		<AnimatePresence>
			<motion.ul
				initial={{ x: -200 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.6, type: 'spring' }}
				className="sub_menu"
			>
				{props.children}
			</motion.ul>
		</AnimatePresence>
	);
};

export { SubmenuContainer };
