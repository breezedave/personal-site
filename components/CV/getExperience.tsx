import {config, Job} from "../../config";
import styles from '../../styles/components/CV.module.scss'

export const getExperience = () => {
    const getJobs = (jobs: Job[]) => {
        return jobs.map((job, i) => {
            return (
                <div key={job.title} className={styles.job}>
                    <div className={styles.jobHeader}>
                        <h4>{job.title}</h4>
                        <div>{job.period}</div>
                    </div>
                    {job.paragraphs.map((p) => <p key={p}>{p}</p>)}
                    {(i < jobs.length - 1) && <div className={styles.divider}></div>}
                </div>
            );
        });
    };

    const companies = config.cv.experience.companies.map(({
        companyName, 
        companyDesc, 
        timePeriod, 
        jobs,
    }, i) => (
        <div key={companyName}>
            <section className={styles.experience}>
                <div>                
                    <h2>{config.cv.experience.title}</h2>
                    <div>
                        <div className={styles.company}>
                            <h3>{companyName}</h3>
                            <div>{timePeriod}</div>
                        </div>
                        <div>{companyDesc}</div>
                        <div className={styles.jobs}>
                            {getJobs(jobs)}
                        </div>
                    </div>
                </div>
            </section>
            {!i && (<div className={styles.pageBreak2}></div>)}
        </div>
    ));

    return companies;
}