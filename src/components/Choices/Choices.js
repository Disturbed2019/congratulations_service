import React, {useContext, useState} from 'react';
import styles from './Choices.module.css'
import {holidayContext} from "../../context/holidayContext";

const holiday = {
	newyear: 'Новый год',
	birthdayMan: 'День рождения',
	birthdayWoman: 'День рождения',
	womanDay: '8 марта',
	knowledgeday: 'День знаний'
	
}

const Choices = () => {
	const [open, setOpen] = useState(false)
	const {holiday} = useContext(holidayContext)
	console.log(holiday)
	
	const toggleMenu = () => {
		setOpen(!open)
	}
	
	const changeHoliday = (title) => {
		setIsHoliday(title)
		toggleMenu()
	}
	
	return (
		<div className={styles.wrapper}>
			<button onClick={toggleMenu} className={styles.button}>{holiday}</button>
			{
				open && (
					<ul className={styles.list}>
						{Object.entries(holiday).map(item => (
							<li
								key={item[0]}
								className={styles.item}
								onClick={() => changeHoliday(item[1])}
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