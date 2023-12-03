import styles from './SuccessRegistrationPage.module.css'
import {Link} from "react-router-dom";

export const SuccessRegistrationPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1>Дякуємо за реєстрацію</h1>
				<h3>Для завершення реєстрації прейдіть до своєї пошти та підтвердіть реєстрацію натиснувши на посилання</h3>
				<img src="/Сheckmark.svg" alt="check"/>
				<Link to='/'> ← На головну</Link>
			</div>
		</div>
	);
};