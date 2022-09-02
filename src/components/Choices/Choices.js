import React, {useEffect, useState} from 'react';
import styles from './Choices.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchHolidays, setHoliday} from "../../store/holidaysSlice";
import {fetchText} from "../../store/textSlice";


const Choices = () => {
	const [open, setOpen] = useState(false)
	const {holiday, holidays, loading} = useSelector(state => state.holidays)
	const dispatch = useDispatch()
	
	const toggleMenu = () => {
		if (loading !== 'success') return
		setOpen(!open)
	}
	
	useEffect(()=> {
		dispatch(fetchHolidays())
	},[dispatch])
	
	return (
		<div className={styles.wrapper}>
			<button onClick={toggleMenu} className={styles.button}>
				{loading !== 'success' ?
					'Загрузка...' :
					
					holidays[holiday] || 'Choices holiday'}
			</button>
			{
				open && (
					<ul className={styles.list}>
						{Object.entries(holidays).map(item => (
							<li
								key={item[0]}
								className={styles.item}
								onClick={() => {
									dispatch(setHoliday(item[0]))
									dispatch(fetchText(item[0]))
									toggleMenu()
								}}
							>
								{item[1]}
							</li>
						))}
					
					</ul>
				)
			}
		</div>
	
	
	);
};

export default Choices;