import React, {useContext, useState} from 'react';
import styles from './Choices.module.css'
import {holidayContext} from "../../context/holidayContext";


const Choices = () => {
	const [open, setOpen] = useState(false)
	const {holidays, holiday, changeHoliday} = useContext(holidayContext)
	
	const toggleMenu = () => {
		setOpen(!open)
	}
	
	return (
		<div className={styles.wrapper}>
			<button onClick={toggleMenu} className={styles.button}>{holidays[holiday] || 'Choices holiday'}</button>
			{
				open && (
					<ul className={styles.list}>
						{Object.entries(holidays).map(item => (
							<li
								key={item[0]}
								className={styles.item}
								onClick={() => {
									changeHoliday(item[0])
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