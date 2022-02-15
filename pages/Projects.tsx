import { Layout, CV } from "../components";
import { config } from "../config";
import type { NextPage } from 'next'
import Head from 'next/head'

const ProjectsPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>{config.cv.meta.title}</title>
                <meta name="description" content={config.cv.meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=0.5"></meta>
            </Head>

            <Layout>
                <span>Projects</span>
            </Layout>
        </div>
    )
}

export default ProjectsPage
