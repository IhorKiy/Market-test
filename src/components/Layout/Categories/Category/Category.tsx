import styles from './Category.module.css'
import {CategoriesContent} from "../../../../stores/fetchData.tsx";



const Category = ({title, icon, slug, subcategories}:CategoriesContent) => {


	return (
		<div className={styles.categoryCard}>
			<div className={styles.categoryTitle}>
				<div className={styles.categoryImage}><img src={icon} alt="icon"/></div>
				<div className={styles.categoryName}>{title}</div>
				{slug}
			</div>
			<div className={styles.subcategories}>
				{subcategories.map((sub, index:number ) => (

					<div key={index} className={styles.subcategory}>{sub.title}</div>


				))}

			</div>

		</div>
	)
}
export default Category