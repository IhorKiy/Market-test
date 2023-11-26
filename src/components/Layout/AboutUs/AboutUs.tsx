import styles from './AboutUs.module.css'

const AboutUs = () => {
	return (
		<div className={styles.aboutUsBlock}>
			<div className={styles.block}>
				<div className={styles.aboutUsImage}>
					<img src="/Icon.svg" alt="icon"/>
				</div>
				<div className={styles.aboutUsDescription}>
					<div className={styles.description}></div>
					<div className={styles.descriptionBold}>Про нас цінності</div>
					<div className={styles.descriptionBold}></div>
					<div className={styles.description}></div>
					<div className={styles.description}></div>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.aboutUsImage}>
					<img src="/Icon.svg" alt="icon"/>
				</div>
				<div className={styles.aboutUsDescription}>
					<div className={styles.description}></div>
					<div className={styles.descriptionBold}>Про нас цінності</div>
					<div className={styles.descriptionBold}></div>
					<div className={styles.description}></div>
					<div className={styles.description}></div>
					<div className={styles.button}>
						<img src="/Button.svg" alt="button"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutUs