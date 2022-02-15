import {config} from "../../config";
import styles from '../../styles/components/CV.module.scss'

export const getSkills = () => {
    const skills = config.cv.skills.map(({titles, skills}) => (
        <section key={JSON.stringify(titles)} className={styles.skills}>
            <div>                
                <h2>
                    {titles.map((title) => <div key={title}>{title}</div>)}
                </h2>
                <ul>
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        </section>
    ));

    return skills;
}