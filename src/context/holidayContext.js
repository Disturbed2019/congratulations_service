// import {createContext, useState} from "react";
// import {useFetch} from "../hooks/useFetch";
// import {URI_API} from "../const/const";
//
// export const holidayContext = createContext({})
//
// export const HolidayContextProvider = ({children}) => {
// 	const [holiday,  setHoliday] = useState('')
// 	const [holidays] = useFetch(URI_API)
//
// 	const changeHoliday = (title) => {
// 		setHoliday(title)
// 	}
//
// 	return (
// 		<holidayContext.Provider value={{holidays, holiday, changeHoliday}}>
// 			{children}
// 		</holidayContext.Provider>
// 	)
//
// }