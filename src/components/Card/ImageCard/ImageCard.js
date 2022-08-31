import React, {useContext} from 'react';
import {imgContext} from "../../../context/imgContext";


const ImageCard = () => {
	const {image} =  useContext(imgContext)
	console.log(image)
	return (
		<img  src={image} alt="bg" width={840} height={520}/>
	
	);
};

export default ImageCard;