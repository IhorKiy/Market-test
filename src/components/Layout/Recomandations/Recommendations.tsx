import Card from "./Card/Card.tsx";
import styles from './Recommendations.module.css'

const Recommendations = () => {
	return (<div className={styles.recommendations}>
		<div className={styles.recommendationsTitle}>Рекомендовано</div>
			<div className={styles.cards}>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>

		</div>
	)
}
export default Recommendations