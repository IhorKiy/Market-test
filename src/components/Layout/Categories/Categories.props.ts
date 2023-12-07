export interface CategoriesProps {
	props: {
		categoriesBlock:
			{
				title: string,
				description: string
			}
		,
		categoriesContent: [
			{
				title: string,
				icon: string,
				slug: string,
				subcategories: [
					{
						title: string,
						slug: string
					}
				]
			}
		]
	}

}