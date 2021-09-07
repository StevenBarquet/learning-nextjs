import Head from 'next/head'
import Link from "next/link";
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there!</p>
        <p>
          Awesome developer playing with <strong>next js</strong>, it is funny so far...
        </p>
        <h2>
        <Link href="/posts/first-post">
          <a>To first-post</a>
        </Link>
      </h2>
      </section>
    </Layout>
  )
}
