import Container from "../Container/Container";
import styles from './Footer.module.css'
import {ReactComponent as VKIcon} from '../../assets/icons/vk.svg'
import {ReactComponent as TGIcon} from '../../assets/icons/tg.svg'
import {ReactComponent as PINIcon} from '../../assets/icons/pinterest.svg'
import {ReactComponent as StumbIcon} from '../../assets/icons/stumbleupon.svg'


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.contacts}>
						<p>Design: <button>Anastasia Ilina</button></p>
						<p>Coder: <button>Corban Dallas</button></p>
						<p>HBCard, 2022</p>
					</div>
					<ul className={styles.social}>
						<li className={styles.item}>
							<button className={styles.link}>
								<VKIcon/>
							</button>
						</li>
						<li className={styles.item}>
							<button className={styles.link}>
								<TGIcon/>
							</button>
						</li>
						<li className={styles.item}>
							<button className={styles.link}>
								<PINIcon/>
							</button>
						</li>
						<li className={styles.item}>
							<button className={styles.link}>
								<StumbIcon/>
							</button>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;