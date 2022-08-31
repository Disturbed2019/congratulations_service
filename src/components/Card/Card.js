import React from 'react';
import styles from './Card.module.css'
import ImageCard from "./ImageCard/ImageCard";
import Felicitation from "./Felicitation/Felicitation";
import CardBg from '../../assets/images/card-bg.jpg'


const Card = () => {
	return (
		<div className={styles.card}>
				<div className={styles.wrapper}>
					<div className={styles.image}>
						<ImageCard img={CardBg}/>
						<Felicitation/>
					</div>
				</div>
		</div>
	);
};

export default Card;