import { Layout, Carousel } from "../components";
import { config } from "../config";
import type { NextPage } from 'next'
import Head from 'next/head'
import { useWindowWidth } from "../hooks";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    const winWidth = (useWindowWidth() as number);
    const itemWidth = Math.min(winWidth * .75, 1200);
    const {intro, carouselTitle, items} = config.home;
    return (
        <div>
            <Head>
                <title>{config.home.meta.title}</title>
                <meta name="description" content={config.home.meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=0.5"></meta>
            </Head>

            <Layout>
                <div
                    style={{
                        width: `${itemWidth / 10}rem`,
                        margin: "0 auto",
                    }}
                >

                    <div className={`${styles.card} ${styles.intro}`}>
                        <h2>{intro.title}</h2>
                        {intro.paragraphs.map((p) => <p key={p}>{p}</p>)}
                    </div>
                    <div className={styles.card}>
                        <h3>{carouselTitle}</h3>
                        <Carousel 
                            items={items} 
                            carouselWidth={itemWidth - 40}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Home
