import styles from './Question.module.css'
const Question = () => {
	return (
		<div className={styles.questionBlock}>
			<div className={styles.searchPanel}>
				<input type="text" name='question'/>
				<label htmlFor="question">Запитання</label>
			</div>
			<div className={styles.arrow}>
				<img src="/Arrow.svg" alt="arrow"/>
			</div>
		</div>
	)
}
export default Question