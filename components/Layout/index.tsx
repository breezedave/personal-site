/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ReactNode } from "react";
import { config } from "../../config";
import styles from "../../styles/components/Layout.module.scss";

export const Layout = ({children}: {children: ReactNode}) => {
    const {
        logo,
        coding,
        animation,
        aboutMe,
        cv,

    } = config.layout;

    return (
        <div className={styles.layoutOuter}>
            <img className={styles.bg} src="/sun-tornado.svg" alt="background" />
            <div className={styles.layout}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.logo}>
                        <Link href="/">
                            <a>{logo}</a>
                        </Link>
                    </h1>
                    <div className={styles.headerLinks}><Link href="/coding"><a>{coding}</a></Link></div>
                    <div className={styles.headerLinks}><Link href="/animation"><a>{animation}</a></Link></div>
                    <div className={styles.headerLinks}><Link href="/aboutMe"><a>{aboutMe}</a></Link></div>
                    <div className={styles.headerLinks}><Link href="/cv"><a>{cv}</a></Link></div>
                </header>
                <main className={styles.pageBody}>
                    {children}
                </main>
                <footer className={styles.pageFooter}>

                </footer>
            </div>
        </div>
    );
}