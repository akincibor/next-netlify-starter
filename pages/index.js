import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Takeover by Akincibor!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Takeover by Ak1nc1bor!" />
        <p className="description">
          [Bug Bounty Hunter - White Hat]
        </p>
        <p className="description">
          Triage my report or contact me for fixing the issue ASAP: akincibor@wearehackerone.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
