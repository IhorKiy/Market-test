import styles from './AboutUs.module.css'

const AboutUs = ({props}) => {
	return (

		<div className={styles.aboutUsBlock}>
			{props.aboutUsBlock.map((el) => (
				<div className={styles.block}>
					<div className={styles.aboutUsImage}>
						<img src={el.image} alt="icon"/>
					</div>
					<div className={styles.aboutUsDescription}>
						<div className={styles.descriptionBold}>{el.title}</div>
						<div className={styles.descriptionBold}>{el.description}</div>
						<div className={styles.description}>{el.description}</div>
						<div className={styles.description}>{el.description}</div>
						<div className={styles.button}>
							<img src="/Button.svg" alt="button"/>
						</div>
					</div>
				</div>
			))}


		</div>
	)
}
export default AboutUs