import {config} from "../../config";
import styles from '../../styles/components/CV.module.scss'
import Image from 'next/image'

export const getPersonal = () => {

    const {personalInfo, name, title, subtitle, image} = config.cv.header;
    const parts = personalInfo.map((keyVal) => (
        <div key={keyVal.key} className={styles.personalInfo}>
                <div className={styles.key}>{keyVal.key}</div>
                <div className={styles.value}>{keyVal.val}</div>
        </div>
    ));

    return (
        <header className={styles.header}>
            <div className={styles.headShot}>
                <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={image.width} 
                    height={image.height} 
                />
            </div>
            <div className={styles.personal}>
                {parts}
                <h1 className={styles.name}>{name}</h1>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.title}>{title}</div>
            </div>
        </header>
    );
}