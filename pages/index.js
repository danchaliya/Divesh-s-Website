import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu';


export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: 'linear-gradient(to right, #ffafbd, #ffc3a0)' }}>
      <Head>
        <title>DiveshAnchaliya.xyz </title>
        <meta name="description" content="diveshanchaliya.xyz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Divesh Anchaliya | Computer Science & Mathematics" />

      {/* Menu */}
      <nav class>
        <ul class="horizontal-menu">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="welcome" className="welcome">
          <p> 
  Motivated computer science sophomore at 
  <a href="https://www.elon.edu" target="_blank" rel="noopener noreferrer">Elon University</a>
  seeking opportunities to apply programming knowledge and gain experience in the field through internships and projects.
</p>

           <a href="https://docs.google.com/document/d/14_sppW_jSBi4qQUKHFRjj-70wWxE8m-5b6XeIjCFcGQ/edit?usp=sharing" target="_blank" className="bubble-button">Download My Resume</a>
          
        </section>
        
<section id="skills" className="skills">
  <h2>Skills</h2>
  <ul>
    <li><a href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</a></li>
    <li><a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">Java</a></li>
    <li><a href="https://golang.org" target="_blank" rel="noopener noreferrer">Go</a></li>
    <li><a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
    <li><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a></li>
    <li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a></li>
    <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a></li>
    <li><a href="https://flask.palletsprojects.com" target="_blank" rel="noopener noreferrer">Flask</a></li>
    <li><a href="https://www.postman.com/api-documentation-tool/" target="_blank" rel="noopener noreferrer">API Integrations</a></li>
  </ul>
</section>


      <section id="projects" className="projects">
  <h2>Recent Projects</h2>
  <div className="project-card">
    <a href="https://github.com/elonsoc/ods" target="_blank" rel="noopener noreferrer">
      <h3>Project 1: Elon Open Data Service (ODS)</h3>
    </a>
    <h4>Software Engineer</h4>
    <p>Built an API for students at Elon which extracts Data from Elon Servers regarding class schedules, building times, dining hall menus and allows student developers to build an application using the API to gather data from Elon's Servers
    Created a design document that outlined the steps needed to build the API and included specific endpoints for the API to retrieve information
    Worked on writing code that would authenticate users through the use of SAML Authentication and the use of Cookies.</p>
  </div>
          <div className="project-card">
  <a href="https://github.com/danchaliya/KiddyKam---PennApps" target="_blank" rel="noopener noreferrer">
    <h3>Project 2: KiddyKam</h3>
  </a>
  <h4>Software Engineer</h4>
  <p>[Description of the KiddyKam project.]</p>
</div>

        <div className="project-card">
  <a href="https://github.com/danchaliya/HerdsWallet" target="_blank" rel="noopener noreferrer">
    <h3>Project 3: HerdsWallet</h3>
  </a>
  <h4>Creator and Software Engineer</h4>
  <p>Created the idea of a financial tracking app and worked with a team of 4 to create an application in 36 hours for the 2023 Hackabull Hackaton at the University of South Florida.  
Created the front-end in JavaScript and TypeScript
Helped with routing the backend to the frontend
Helped incorporate the use of MongoDB into the backend</p>
</div>

  <div className="project-card">
            <h3>Project 4:ZenZone </h3>
            <h4> Creator and Software Engineer</h4>
            <p>Created the idea of a guided meditation app and worked with a team of 4 to create an application in 48 hours
Created the backend in Java. 
Helped with routing the backend to the frontend
Helped incoporate the use of MongoDB into the backend</p>
          </div>
  
        </section>

        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>Please let me know if you have any further questions or if there is anything else I can assist you with.</p> 
          <form id="contact-form">
  <input type="text" id="name" name="name" placeholder="Name" required />
  <input type="email" id="email" name="email" placeholder="Email" required />
  <textarea id="message" name="message" placeholder="Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
          <p>Gmail: <a href="mailto:divesh.nc@gmail.com">divesh.nc@gmail.com</a></p>
          <p>Phone: <a href="tel:+19193978162">919-397-8162</a></p>
          <p> LinkedIn: <a href="https://www.linkedin.com/in/divesh-anchaliya-1828591ab/">LinkedIn Profile</a></p>
          <p> GitHub: <a href="https://github.com/danchaliya">GithubProfile</a></p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

