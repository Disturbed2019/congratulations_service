import React from 'react';

import cardBG from '../../../assets/images/card-bg.jpg'
import {useSelector} from "react-redux";


const ImageCard = () => {
	const {urlImg, loading} = useSelector(state => state.image)
	return (
		<img src={
			loading === 'loading'
			? 'Загрузка....'
				: urlImg === ''
			? cardBG
				: urlImg
			}
		     alt="bg" width={840} height={520}/>
	
	);
};

export default ImageCard;