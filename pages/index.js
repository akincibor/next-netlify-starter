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
      </main>

      <Footer />
    </div>
  )
}
