import {createContext, useState} from "react";

export const imgContext = createContext({})

export const ImageContextProvider = ({children}) => {
	const [image,  setImage] = useState('')
	
	return (
		<imgContext.Provider value={{image, setImage}}>
			{children}
		</imgContext.Provider>
	)
	
}