import Head from 'next/head'

import Header from '@/components/Header'

export default function Home () {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />
    </>
  )
}
