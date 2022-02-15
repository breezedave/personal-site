import {config} from "../../config";
import styles from '../../styles/components/CV.module.scss'

export const getProfile = () => {
    const {title, paragraphs} = config.cv.profile;
    
    return (
        <section className={styles.profile}>
            <div>
                <h2>{title}</h2>
                {paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
        </section>
    )
}