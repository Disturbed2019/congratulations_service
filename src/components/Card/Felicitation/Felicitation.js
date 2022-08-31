import React, {useContext} from 'react';
import styles from './Felicitation.module.css'
import {textContext} from "../../../context/textContext";


const Felicitation = () => {
	const {text} = useContext(textContext)
	
	return (
		<p className={styles.felicitation}>
			{text}
		</p>
	);
};

export default Felicitation;