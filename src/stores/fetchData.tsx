import {create} from "zustand";
import axios from "axios";
import {persist} from "zustand/middleware";

export interface Root {
	data: Data
}

export interface Data {
	logo: string
	links: Links[]
	header: Header[]
	categoriesBlock: CategoriesBlock[]
	categoriesContent: CategoriesContent[]
	aboutUsBlock: AboutUsBlock[]
	footer: Footer[]
	socialMedia: SocialMedia[]
}

export interface Links {
	title: string
	link: string
}

export interface Header {
	title: string
	description: string
}

export interface CategoriesBlock {
	title: string
	description: string
}

export interface CategoriesContent {
	title: string
	icon: string
	slug: string
	subcategories: Subcategory[]
}

export interface Subcategory {
	title: string
	slug: string
}

export interface AboutUsBlock {
	title: string
	description: string
	image: string
}

export interface Footer {
	description: string
}

export interface SocialMedia {
	title: string
	link: string
	icon: string
}




const useFetchData = create(persist((set) => ({
		data: {},
		fetchData: async ():Promise<void> => {
			const url = 'http://3.68.186.228:86/api/v1/homepage'
			const response = await axios.get(url)
			set({data: await response.data.data})
		},


	}), {
		name: "data"
	})
)
export default useFetchData