import React, {useContext} from 'react';
import {imgContext} from "../../../context/imgContext";
import cardBG from '../../../assets/images/card-bg.jpg'


const ImageCard = () => {
	const {urlImg} = useContext(imgContext)
	return (
		<img src={urlImg || cardBG} alt="bg" width={840} height={520}/>
	
	);
};

export default ImageCard;