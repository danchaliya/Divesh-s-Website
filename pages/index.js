import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu';


export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#fa71cd' }}>
      <Head>
        <title>Welcome to Divesh's website </title>
        <meta name="description" content="Divesh Anchaliya's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Divesh Anchaliya | Computer Science" />

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
          <p> Motivated computer science sophomore seeking opportunities to apply programming knowledge and gain experience in the field through internships and projects. 
           <a href="/https://docs.google.com/document/d/14_sppW_jSBi4qQUKHFRjj-70wWxE8m-5b6XeIjCFcGQ/edit?usp=sharing" target="_blank" className="resume-link">Download My Resume</a>
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
            <h3>Project 1: Elon Open Data Service(ODS)</h3>
            <h4>Software Engineer</h4>
            <p>Built an API for students at Elon which extracts Data from Elon Servers regarding class schedules, building times, dining hall menus and allows student developers to build an application using the API to gather data from Elon's Servers
Created a design document that outlined the steps needed to build the API and included specific endpoints for the API to retrieve information
Worked on writing code that would authenticate users through the use of SAML Authentication and the use of Cookies.</p>
          </div>
          <div className="project-card">
            <h3>Project 2:KiddyKam </h3>
            <h4>Software Engineer</h4>
            <p></p>
          </div>
        <div className="project-card">
            <h3>Project 3:HerdsWallet  </h3>
            <h4> Creator and Software Engineer</h4>
            <p>Created the idea of a financial tracking app and worked with a team of 4 to create an application in 36 hours for the 2023 Hackabull Hackaton at the University of South Florida.  
Created the front-end in Java Script and TypeScript
Helped with routing the backend to the frontend
Helped incoporate the use of MongoDB into the backend</p>
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
          <p>Feel free to reach out if you have questions or just want to chat! Email me at: <a href="mailto:divesh.nc@gmail.com">divesh.nc@gmail.com</a></p>
          <p>Phone: 919-397-8162</p>
          <p> LinkedIn: <a href="https://www.linkedin.com/in/mira-martinez-1828591ab/">LinkedIn Profile</a></p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

