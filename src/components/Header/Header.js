import React from 'react';
import styles from './Header.module.css'
import Container from "../Container/Container";
import Choices from "../Choices/Choices";
import {useDispatch} from "react-redux";
import {fetchText} from "../../store/textSlice";
import {fetchImage} from "../../store/imageSlice";
import {useParams} from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch()
	const {holiday} = useParams()
	
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
						<button className={styles.button}
						        disabled={!holiday}
						        onClick={() => {
							        dispatch(fetchImage(holiday))
						        }}
						
						>Change background</button>
					</div>
					
					<Choices/>
				
				</div>
			</Container>
		</header>
	);
};

export default Header;