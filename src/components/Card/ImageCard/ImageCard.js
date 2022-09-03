import React from 'react';

import cardBG from '../../../assets/images/card-bg.jpg'
import {useSelector} from "react-redux";


const ImageCard = () => {
	const {urlImg} = useSelector(state => state.image)
	return (
		<img src={ urlImg || cardBG} alt="bg" width={840} height={520}/>
	
	);
};

export default ImageCard;