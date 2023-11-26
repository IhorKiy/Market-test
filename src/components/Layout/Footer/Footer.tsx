import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.contacts}>
				<div className={styles.logo}>MARKETPLACE</div>
				<div className={styles.informationBlock}>
					<div className={styles.information}>Футер</div>
					<div className={styles.information}></div>
				</div>
				<div>
					<div className={styles.socialIcons}>
						<div className={styles.icon}></div>
						<div className={styles.icon}></div>
						<div className={styles.icon}></div>
					</div>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.wrapLinks}>
					<div className={styles.linksBlock}>
						<div className={styles.linksBold}></div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
					</div>
					<div className={styles.linksBlock}>
						<div className={styles.linksBold}></div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
						<div className={styles.links}>Текст, лінки</div>
					</div>
				</div>
				<div className={styles.politicsWrap}><div className={styles.politics}>
					<div>Політика конціденційності</div>
				</div></div>

			</div>

		</div>
	)
}
export default Footer