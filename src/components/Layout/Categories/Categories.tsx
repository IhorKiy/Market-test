import Category from "./Category/Category.tsx";
import styles from './Categories.module.css'
import {CategoriesProps} from "./Categories.props.ts";
import React from "react";

const Categories = ({props}: CategoriesProps): React.JSX.Element => {
	return (
		<div className={styles.categoryBlock}>
			<div className={styles.categoryTitleBlock}>
				<div className={styles.categoryTitle}>{props.categoriesBlock.title}</div>
				<div className={styles.description}>{props.categoriesBlock.description}</div>

			</div>
			<div className={styles.categoryCard}>
				{props.categoriesContent.map((props) => (
					<Category title={props.title} icon={props.icon} slug={props.slug} subcategories={props.subcategories}/>
				))}
			</div>
		</div>
	)
}
export default Categories