import styles from './Category.module.css'
import React from "react";


const Category = ({title, icon, slug, subcategories}) => {
	console.log(subcategories)

	return (
		<div className={styles.categoryCard}>
			<div className={styles.categoryTitle}>
				<div className={styles.categoryImage}><img src={icon} alt="icon"/></div>
				<div className={styles.categoryName}>{title}</div>
				{slug}
			</div>
			<div className={styles.subcategories}>
				{subcategories.map((sub ) => (

					<div className={styles.subcategory}>{sub.title}</div>


				))}

			</div>

		</div>
	)
}
export default Category