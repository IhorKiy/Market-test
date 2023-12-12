import styles from './Card.module.css'
const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.image}><img src="/Icon.svg" alt="icon"/></div>

			<div className={styles.serviceName}>Назва сервісу</div>
			<div className={styles.description}>Опис</div>
			<div className={styles.rate}>Рейтинг</div>
		</div>
	)
}
export default Card