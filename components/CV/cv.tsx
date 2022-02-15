import styles from '../../styles/components/CV.module.scss'
import { 
    getPersonal, 
    getSkills, 
    getProfile, 
    getExperience,
    getEducation,
    getFunFacts,
} from './'

export const CV = () => {
    const personal = getPersonal();
    const skills = getSkills();
    const profile = getProfile();
    const experience = getExperience();
    const education = getEducation();
    const funFacts = getFunFacts();

    return (
        <div className={styles.cv}>
            <div className={styles.main}>
                {personal}
                {profile}
                {skills}
                <div className={styles.pageBreak1} />
                {experience}
                {education}
                {funFacts}
            </div>
        </div>
    );

}