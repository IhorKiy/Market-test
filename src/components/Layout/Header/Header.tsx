import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
	return (<div className={styles.headerBlock}>
			<div className={styles.header}>
				<div className={styles.linksBlock}>
					<div className={styles.logo}>MARKETPLACE</div>
					<ul className={styles.links}>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
					</ul>
				</div>
				<div className={styles.headerButtons}>
					<Link to="/login"><button className={styles.loginButton}> Увійти</button></Link>
					<div className={styles.buttonBusiness}>
						<img src="/Button.svg" alt="button"/>
						<div className={styles.buttonText}>Для бізнесу</div>
					</div>

				</div>
			</div>

		</div>


	)
}
export default Header