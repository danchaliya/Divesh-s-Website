
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#FFD700' }}>
      <Head>
        <title>Welcome to Divesh's website </title>
        <meta name="description" content="Divesh Anchaliya's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    
      <main>
        <Header title="Divesh Anchaliya" />
        <p className="description">
          Hi. My name is Divesh Anchaliya and Welcome to my website. Here you will find an aboutme page, a reume page, a projects page and a contact information page. 
        </p>
      </section>
  </main>

    <section className="skills"></section>
    

      <Footer />
    </div>

  
  )
}
