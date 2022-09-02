import React from 'react';
import styles from './Header.module.css'
import Container from "../Container/Container";
import Choices from "../Choices/Choices";
import {useDispatch, useSelector} from "react-redux";
import {fetchText} from "../../store/textSlice";

const Header = () => {
	const dispatch = useDispatch()
	const {holiday} = useSelector(state => state.holidays)
	
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.buttons}>
						<button className={styles.button}
						        disabled={!holiday}
						        onClick={() => {
							        dispatch(fetchText(holiday))
						        }}
						>Change congrats
						</button>
						<button className={styles.button}>Change background</button>
					</div>
					
					<Choices/>
				
				</div>
			</Container>
		</header>
	);
};

export default Header;