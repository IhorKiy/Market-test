import Header from "./components/Layout/Header/Header.tsx";
import Promo from "./components/Layout/Promo/Promo.tsx";
import Recommendations from "./components/Layout/Recomandations/Recommendations.tsx";
import Categories from "./components/Layout/Categories/Categories.tsx";
import AboutUs from "./components/Layout/AboutUs/AboutUs.tsx";
import FAQ from "./components/Layout/FAQ/FAQ.tsx";
import SearchByCity from "./components/Layout/SearchByCity/SearchByCity.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";
import styles from './App.module.css'

function App() {

	return (
		<div className={styles.app}>
			<Header/>
			<Promo/>
      <Recommendations/>
			<Categories/>
			<AboutUs/>
			<FAQ/>
			<SearchByCity/>
			<Footer/>


		</div>
	)
}

export default App
