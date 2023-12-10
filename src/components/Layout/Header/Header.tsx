import styles from './Header.module.css'
import {Link} from "react-router-dom";
import useFetchData, {Links} from "../../../stores/fetchData.tsx";
const Header = ()=> {
	const dataState = useFetchData(state => state.data)


	return (<div className={styles.headerBlock}>
			<div className={styles.header}>
				<div className={styles.linksBlock}>
					<div className={styles.logo}>{dataState.logo}</div>
					<ul className={styles.links}>
						{dataState && dataState.links.map((link: Links, index:number) => (
							<li key={index}><a href={`${link.link}`}>{link.title}</a></li>
						))}

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