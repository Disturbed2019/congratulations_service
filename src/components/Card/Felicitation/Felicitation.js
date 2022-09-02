import React from 'react';
import styles from './Felicitation.module.css'
import {useSelector} from "react-redux";



const Felicitation = () => {
	const {text, loading} = useSelector(state => state.text)


	
	
	return (
		<p className={styles.felicitation}>
			{
				loading === 'loading'
					? 'Загрузка...'
					: text === ''
						? 'Выберите повод для поздравления!'
						: text
			}
		</p>
	);
};

export default Felicitation;