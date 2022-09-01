import {useEffect, useState} from "react";
import {URI_API} from "../const/const";

export const useImage = holiday =>{
	const [image, setImage] = useState({})
	
	useEffect(()=> {
		if (!holiday) return
		fetch(`${URI_API}image/${holiday}` )
			.then(response => {
				if (response.status !== 200) {
					throw new Error(response.status.toString())
				}
				return response.json()
			})
			.then(data => {
				console.log(data.urlImg)
				if (data.urlImg){
					setImage(data.urlImg)
				}
			})
			.catch(err => console.error(err))
	},[holiday])
	
	return [image]
}