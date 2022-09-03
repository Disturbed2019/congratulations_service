import React, {useEffect, useState} from 'react';
import styles from './Choices.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchHolidays} from "../../store/holidaysSlice";
import {fetchText} from "../../store/textSlice";
import {fetchImage} from "../../store/imageSlice";
import {NavLink, useParams} from "react-router-dom";


const Choices = () => {
	const [open, setOpen] = useState(false)
	const {holidays, loading} = useSelector(state => state.holidays)
	const dispatch = useDispatch()
	const {holiday} = useParams()
	
	const toggleMenu = () => {
		if (loading !== 'success') return
		setOpen(!open)
	}
	
	useEffect(() => {
		dispatch(fetchHolidays())
		if (holiday){
			dispatch(fetchText(holiday))
			dispatch(fetchImage(holiday))
		}
	}, [dispatch,holiday])
	
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
									toggleMenu()
								}}
							>
								<NavLink to={`card/${item[0]}`}
								         className={({isActive}) => (isActive ? styles.linkActive : '')}
								>{item[1]}</NavLink>
							
							</li>
						))}
					
					</ul>
				)
			}
		</div>
	
	
	);
};

export default Choices;