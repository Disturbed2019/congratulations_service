import React from 'react';
import styles from './Header.module.css'
import Container from "../Container/Container";
import Choices from "../Choices/Choices";

const Header = () => {
	return (
		<header className={styles.header}>
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.buttons}>
					<button className={styles.button}>Change congrats</button>
					<button className={styles.button}>Change background</button>
				</div>
				
				<Choices/>
				
			</div>
		</Container>
		</header>
	);
};

export default Header;