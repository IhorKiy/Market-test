import styles from './RegistrationPage.module.css'
import {Link} from "react-router-dom";
import {FormEvent} from "react";

const RegistrationPage = () => {
	const submit =(e:FormEvent) => {
		e.preventDefault()
	}
	return (<div className={styles.registrationForm}>
			<h2>Реєстрація</h2>
			<form className={styles.form} onSubmit={submit}>
				<label htmlFor="name">Ім'я</label>
				<input type="text" name='name' placeholder="введіть ім'я"/>
				<label htmlFor="surname">Фамілія</label>
				<input type="text" name='surname' placeholder='введіть фамілію'/>
				<label htmlFor="email">Електронна адреса</label>
				<input type="email" name='email' placeholder='введіть електронну адресу'/>
				<label htmlFor="password">Пароль</label>
				<input type="password" name='password' placeholder='введіть пароль'/>
				<label htmlFor="confirmPassword" >Підтвердіть пароль</label>
				<input type="password" name='confirmPassword' placeholder='підтвердіть пароль'/>
				<div className={styles.formButton}><button>Зареєструватися</button></div>

			</form>
			<Link to='/'> ← На головну</Link>
		</div>
	)
}
export default RegistrationPage;
