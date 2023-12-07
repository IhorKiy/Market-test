import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {HeaderProps} from "./Header.props.ts";
import React from "react";



const Header = ({props}:HeaderProps): React.JSX.Element => {



	return (<div className={styles.headerBlock}>
			<div className={styles.header}>
				<div className={styles.linksBlock}>
					<div className={styles.logo}>{props.logo}</div>
					<ul className={styles.links}>
						{props && props.links.map((link) => (
							<li><a href={`${link.link}`}>{link.title}</a></li>
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