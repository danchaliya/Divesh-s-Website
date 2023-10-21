import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu';


export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#ADD8E6' }}>
      <Head>
        <title>Welcome to Divesh's website </title>
        <meta name="description" content="Divesh Anchaliya's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Divesh Anchaliya | Computer Science" />

      {/* Menu */}
      <nav>
        <ul class="Menu">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="welcome" className="welcome">
          <p>
            Hello. My name is Divesh Anchaliya. I am a sophmore majoring in Computer Science and Economics at Elon University. I am currently seeking opportunities to apply programming knowledge and gain experience in the field through internships and projects. 
          </p>
        </section>
        
        <section id="skills" className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>   
            <li>Go</li> 
            <li>JavaScript</li>            
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>            
            <li>React</li>
            <li>Flask</li>
            <li>API Integrations</li>
          </ul>
        </section>

        <section id="projects" className="projects">
          <h2>Recent Projects</h2>
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of the first project, highlighting its features and technologies used.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of the second project, highlighting its features and technologies used.</p>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out if you have questions or just want to chat! Email me at: <a href="mailto:divesh.nc@gmail.com">divesh.nc@gmail.com</a></p>
          <p>Phone: 919-397-8162</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

