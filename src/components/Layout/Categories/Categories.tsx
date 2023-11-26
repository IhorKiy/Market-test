import Category from "./Category/Category.tsx";
import styles from './Categories.module.css'
const Categories = () => {
	return (
		<div className={styles.categoryBlock}>
			<div className={styles.categoryTitleBlock}>
				<div className={styles.categoryTitle}>Категорії</div>
				<div className={styles.description1}></div>
				<div className={styles.description2}></div>
			</div>
			<div className={styles.categoryCard}>
			<Category/>
			<Category/>
			<Category/>
			<Category/>
			<Category/>
			<Category/>
			<Category/>
			<Category/>
			</div>
		</div>
	)
}
export default Categories