import React from 'react';

import { useState } from 'react';

import { UtilitiesStyled, SearchBarInputButton } from './UtilitiesStyled';

import { motion, AnimatePresence } from 'framer-motion';

import { TbSearch } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';

import { SearchInput } from '../SearchInput/SearchInput';

const Utilities = () => {
	const [click, setClick] = useState(false);

	return (
		<UtilitiesStyled>
			<SearchBarInputButton>
				<SearchInput click={click} setClick={setClick} />
				<AnimatePresence>
					{!click && (
						<motion.div
							key="search"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="logo_container"
							onClick={() => setClick(!click)}
						>
							<TbSearch />
						</motion.div>
					)}

					{click && (
						<motion.div
							key="cross"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="logo_container"
							onClick={() => setClick(!click)}
						>
							<IoMdClose />
						</motion.div>
					)}
				</AnimatePresence>
			</SearchBarInputButton>
		</UtilitiesStyled>
	);
};

export { Utilities };
