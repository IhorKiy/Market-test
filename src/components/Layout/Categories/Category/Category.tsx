import styles from './Category.module.css'
const Category = () => {
	return (
		<div className={styles.categoryCard}>
			<div className={styles.categoryTitle}>
				<div className={styles.categoryImage}></div>
				<div className={styles.categoryName}>Назва категорії сервісу</div>
			</div>
			<div className={styles.subcategories}>
				<div className={styles.subcategory}>Підкатегорії</div>
				<div className={styles.subcategory}>Підкатегорії</div>
				<div className={styles.subcategory}>Підкатегорії</div>
				<div className={styles.subcategory}>Підкатегорії</div>
				<div className={styles.subcategory}>Підкатегорії</div>
			</div>

		</div>
	)
}
export default Category