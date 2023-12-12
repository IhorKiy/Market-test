import styles from './Footer.module.css'
import useFetchData, {SocialMedia} from "../../../stores/fetchData.tsx";


const Footer = () => {
	const dataState = useFetchData(state => state.data)

	return (
		<div className={styles.footer}>
			<div className={styles.contacts}>
				<div className={styles.logo}>MARKETPLACE</div>
				<div className={styles.informationBlock}>
					<div className={styles.information}>{dataState.footer.description}</div>
					<div className={styles.information}>{dataState.footer.description}</div>
				</div>
				<div>
					<div className={styles.socialIcons}>
						{dataState.socialMedia.map((el: SocialMedia, index:number) => (
							<div key={index} className={styles.icon}><span><a href={el.link}>{el.title}<img src={el.icon} alt="icon"/></a></span></div>
						))}


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




