import Category from "./Category/Category.tsx";
import styles from './Categories.module.css'
import useFetchData, {CategoriesContent} from "../../../stores/fetchData.tsx";


const Categories = () => {
	const dataState = useFetchData(state => state.data)
	return (
		<div className={styles.categoryBlock}>
			<div className={styles.categoryTitleBlock}>
				<div className={styles.categoryTitle}>{dataState.categoriesBlock.title}</div>
				<div className={styles.description}>{dataState.categoriesBlock.description}</div>

			</div>
			<div className={styles.categoryCard}>
				{dataState.categoriesContent.map((props:CategoriesContent, index:number) => (
					<Category key={index} title={props.title} icon={props.icon} slug={props.slug} subcategories={props.subcategories}/>
				))}
			</div>
		</div>
	)
}
export default Categories