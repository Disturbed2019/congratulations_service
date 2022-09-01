import {createContext, useState} from "react";
import {useImage} from "../hooks/useImage";
import {useContext} from "react";
import {holidayContext} from "./holidayContext";

export const imgContext = createContext({})

export const ImageContextProvider = ({children}) => {
	const {holiday} = useContext(holidayContext)
	const [image] = useImage(holiday)
	
	return (
		<imgContext.Provider value={{image}}>
			{children}
		</imgContext.Provider>
	)
	
}