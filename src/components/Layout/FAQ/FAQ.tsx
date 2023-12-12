import Question from "./Question/Question.tsx";
import styles from './FAQ.module.css'

const Faq = () => {
	return (<div className={styles.faqBlock}>
			<div className={styles.title}>
				<div className={styles.faqTitleContent}>FAQ</div>
			</div>
			<div className={styles.questionsBlock}>
				<Question/>
				<Question/>
				<Question/>
				<Question/>
				<Question/>
				<Question/>
			</div>

		</div>
	)
}
export default Faq