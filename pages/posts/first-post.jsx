import Head from 'next/head'
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post :D</title>
      </Head>
      <h1>First Post</h1>      
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </Layout>
  );
}
