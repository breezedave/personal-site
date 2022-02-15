import {config} from "../../config";
import styles from '../../styles/components/CV.module.scss'

export const getFunFacts = () => {

    const {title, paragraphs} = config.cv.funFacts;

    return (
        <section className={styles.funFacts}>
            <div>                
                <h2>{title}</h2>
                {paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
        </section>
    );
}