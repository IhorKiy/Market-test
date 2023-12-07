import Header from "../../components/Layout/Header/Header.tsx";
import Promo from "../../components/Layout/Promo/Promo.tsx";
import Recommendations from "../../components/Layout/Recomandations/Recommendations.tsx";
import Categories from "../../components/Layout/Categories/Categories.tsx";
import AboutUs from "../../components/Layout/AboutUs/AboutUs.tsx";
import FAQ from "../../components/Layout/FAQ/FAQ.tsx";
import SearchByCity from "../../components/Layout/SearchByCity/SearchByCity.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import styles from './Main.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader..tsx";



function MainPage() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	useEffect(  () => {
		setIsLoading(true)
		const getData = async () => {
			try {
				const url = 'http://3.68.186.228:86/api/v1/homepage'
				const response = await axios.get(url)
				setData(response.data.data)
				setIsLoading(false)
				console.log(response.data.data)
			} catch (error) {
				setIsError(true)
				setIsLoading(false)
			}

		}
		getData()
	}, [])

if (isLoading) return <Loader/>
else if (data && !isError)
	return (
		<div className={styles.app}>
			<Header props={data}/>
			<Promo props={data}/>
			<Recommendations/>
			<Categories props={data}/>
			<AboutUs props={data}/>
			<FAQ/>
			<SearchByCity/>
			<Footer props={data}/>


		</div>
	)
	else {
		return <h1>Щось пішло не так...</h1>
}
}

export default MainPage
