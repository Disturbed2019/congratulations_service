import React, {useEffect} from 'react';
import styles from './Card.module.css'
import ImageCard from "./ImageCard/ImageCard";
import Felicitation from "./Felicitation/Felicitation";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchTextId} from "../../store/textSlice";
import {fetchImageId} from "../../store/imageSlice";


const Card = () => {
	const {idText, idImage} = useParams()
	const dispatch = useDispatch()
	
	
	useEffect(()=> {
		if (idImage && idText){
			dispatch(fetchTextId(idText))
			dispatch(fetchImageId(idImage))
			
		}
	})
	
	
	return (
		<div className={styles.card}>
				<div className={styles.wrapper}>
					<div className={styles.image}>
						<ImageCard />
						<Felicitation/>
					</div>
				</div>
		</div>
	);
};

export default Card;