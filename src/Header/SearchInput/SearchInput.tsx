import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormStyled } from './SearchInputStyled';

import { motion, AnimatePresence } from 'framer-motion';

const SearchInput = (props: any) => {
	const [enteredValue, setEnteredValue] = useState('');
	const navigate = useNavigate();

	const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/simple-recipes-app/searched/' + enteredValue);
		setEnteredValue('');
	};

	return (
		<FormStyled onSubmit={submitFormHandler}>
			<AnimatePresence>
				{props.click && (
					<motion.input
						key="input"
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						exit={{ y: -200 }}
						transition={{ duration: 0.3 }}
						type="text"
						onChange={(e) => setEnteredValue(e.target.value)}
						onBlur={() => props.setClick(!props.click)}
						value={enteredValue}
					/>
				)}
			</AnimatePresence>
		</FormStyled>
	);
};

export { SearchInput };
