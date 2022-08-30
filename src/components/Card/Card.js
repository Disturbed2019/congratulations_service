import React from 'react';
import styles from './Card.module.css'


const Card = () => {
	return (
		<div className={styles.card}>
				<div className={styles.wrapper}>
					<div className={styles.image}>
						<img className={styles.img} src="https://images.unsplash.com/photo-1616745036869-7c11a4e7450c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80" alt=""/>
						<p className={styles.felicitation}>
							Поздравляю с днем рожденья! <br/>
							Пусть будет жизнь полна веселья, <br/>
							Не будет грусти и хлопот, <br/>
							А только счастье круглый год! <br/>
							<br/>
							Желаю творческих успехов, <br/>
							Прекрасных дней, улыбок, смеха. <br/>
							Любви, душевного тепла, <br/>
							Как сказка, чтобы жизнь была!
						
						</p>
					</div>
				</div>
		</div>
	);
};

export default Card;