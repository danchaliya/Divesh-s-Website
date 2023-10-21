import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Divesh's website </title>
        <meta name="description" content="Divesh Anchaliya's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    
      <main>
        <Header title="Divesh Anchaliya" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </section>

    <section className="skills">
    

      <Footer />
    </div>

  
  )
}
