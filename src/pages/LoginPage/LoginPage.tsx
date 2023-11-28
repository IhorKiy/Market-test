import styles from './LoginPage.module.css'
import {FormEvent} from "react";
import {Link} from "react-router-dom";


const LoginPage = () => {
	const submit =(e:FormEvent) => {
		e.preventDefault()
	}
	return (<div className={styles.loginForm}>
			<h2>Логін</h2>
		<form action="" className={styles.form} onSubmit={submit}>
			<label htmlFor="email">Логін</label>
			<input type="email" name='email' placeholder='Введіть email'/>
			<label htmlFor="password">Пароль</label>
			<input type="password" name='password'  placeholder='Введіть пароль'/>
			<div className={styles.formButton}><button>Увійти</button></div>

		</form>
			<div className={styles.links}>
				<div className={styles.noAcc}>Немає аккаунту?</div>
				<Link to={'/registration'}>Зареєструватись</Link>
			</div>
		</div>

	)
}
export default LoginPage

