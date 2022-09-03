import styles from './EmptyCard.module.css'
import React from "react";


const EmptyCard = () => {
	return (
		<div className={styles.card}>
			<p>Выберите повод для поздравления !</p>
		</div>
	);
};

export default EmptyCard;

