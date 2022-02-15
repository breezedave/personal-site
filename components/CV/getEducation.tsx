import {config} from "../../config";
import styles from '../../styles/components/CV.module.scss'

export const getEducation = () => {
    const {title, provider, period, degree, paragraphs} = config.cv.education;

    return (
        <section className={styles.education}>
            <div>                
                <h2>{title}</h2>
                <div className={styles.educationHeader}>
                    <h4 className={styles.provider}>{provider}</h4>
                    <div className={styles.period}>{period}</div>
                </div>
                <h4>{degree}</h4>
                {paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
        </section>
    )
}