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
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#fun-stuff">Fun Stuff</a></li>
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
     <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            My name is Divesh Anchaliya, and I am a sophomore at Elon University majoring in Computer Science and Mathematics on the Pre-Law track.
            I am aspiring to attend Law School and to specialize in Patent and Intellectual Property Law. 
            I have a passion for coding, solving complex problems, engaging in mathematical research, and playing tennis. 
            I am constantly seeking out new learning opportunities and experiences to further my understanding of technology and its applications.
          </p>
        </section>
<section id="skills" className="skills">
  <h2>Skills</h2>
  <ul>
    <section id="skills" className="skills">
  <h2>Skills</h2>
  
  <div className="skill-card">
    <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
      <h3>Python</h3>
    </a>
    <p>Python is a high-level, interpreted language known for its readability and support for multiple programming paradigms. It's widely used in web development, data science, automation, and more.</p>
  </div>

  <div className="skill-card">
    <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
      <h3>Java</h3>
    </a>
    <p>Java is a class-based, object-oriented language that is designed to have as few implementation dependencies as possible, making it a great choice for cross-platform applications.</p>
  </div>

  <div className="skill-card">
    <a href="https://golang.org" target="_blank" rel="noopener noreferrer">
      <h3>Go</h3>
    </a>
    <p>Go, or Golang, is a statically typed, compiled programming language designed at Google. It is known for its simplicity, efficiency, and great support for concurrency.</p>
  </div>

  <div className="skill-card">
    <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
      <h3>JavaScript</h3>
    </a>
    <p>JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.</p>
  </div>

  <div className="skill-card">
    <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
      <h3>TypeScript</h3>
    </a>
    <p>TypeScript is an open-source language which builds on JavaScript by adding static type definitions, allowing for the development of large-scale applications.</p>
  </div>

  <div className="skill-card">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
      <h3>HTML</h3>
    </a>
    <p>HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
  </div>

  <div className="skill-card">
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
      <h3>CSS</h3>
    </a>
    <p>CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.</p>
  </div>

  <div className="skill-card">
    <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
      <h3>Node.js</h3>
    </a>
    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
  </div>

  <div className="skill-card">
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <h3>React</h3>
    </a>
    <p>React is an open-source, front-end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</p>
  </div>
    <div className="skill-card">
  <a href="https://savedparadigms.files.wordpress.com/2014/09/harbison-s-p-steele-g-l-c-a-reference-manual-5th-ed.pdf" target="_blank" rel="noopener noreferrer">
    <h3>C</h3>
  </a>
  <p>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.</p>
</div>

<div className="skill-card">
  <a href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer">
    <h3>C++</h3>
  </a>
  <p>C++ is a highly portable language and is often the language of choice for multi-device, multi-platform app development. It is an extension of the C language with an emphasis on object-oriented programming.</p>
</div>

<div className="skill-card">
  <a href="https://developer.arm.com/architectures/learn-the-architecture/assembly-language" target="_blank" rel="noopener noreferrer">
    <h3>Assembly Language</h3>
  </a>
  <p>Assembly language is a low-level programming language for a computer, or other programmable device specific to a particular computer architecture in contrast to most high-level programming languages.</p>
</div>


  <div className="skill-card">
    <a href="https://flask.palletsprojects.com" target="_blank" rel="noopener noreferrer">
      <h3>Flask</h3>
    </a>
    <p>Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries and has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.</p>
  </div>

  <div className="skill-card">
    <a href="https://www.postman.com/api-documentation-tool/" target="_blank" rel="noopener noreferrer">
      <h3>API Integrations</h3>
    </a>
    <p>API integration is the process of creating a means for two or more APIs to communicate with each other. This involves using a programming interface to the extent that it can be used by other software.</p>
  </div>
  <div className="skill-card">
  <a href="https://www.youtube.com/watch?v=bf2LpPr88SQ" target="_blank" rel="noopener noreferrer">
    <h3>Public Speaking</h3>
  </a>
  <p>Public speaking is the process of communicating information to an audience. It is usually done before a large audience, like in school, the workplace, and even in our personal lives.</p>
</div>
</section>

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
    <h3>Project 2: KiddyKam @ PennApps</h3>
  </a>
  <h4>Software Engineer</h4>
  <p>[Description of the KiddyKam project.]</p>
</div>

        <div className="project-card">
  <a href="https://github.com/danchaliya/HerdsWallet" target="_blank" rel="noopener noreferrer">
    <h3>Project 3: HerdsWallet @ HackaBull</h3>
  </a>
  <h4>Creator and Software Engineer</h4>
  <p>Created the idea of a financial tracking app and worked with a team of 4 to create an application in 36 hours for the 2023 Hackabull Hackathon at the University of South Florida.  
Created the front-end in JavaScript and TypeScript
Helped with routing the backend to the frontend
Helped incorporate the use of MongoDB into the backend</p>
</div>

  <div className="project-card">
    <a href="https://github.com/danchaliya/ZenZone" target="_blank" rel="noopener noreferrer">
            <h3>Project 4:ZenZone @ PhillyCodefest </h3>
  </a>
            <h4> Creator and Software Engineer</h4>
            <p>Created the idea of a guided meditation app and worked with a team of 4 to create an application in 48 hours
Created the backend in Java. 
Helped with routing the backend to the frontend
Helped incoporate the use of MongoDB into the backend</p>
          </div>
<div className="project-card">
  <a href="https://github.com/danchaliya/RankedChoiceVoting" target="_blank" rel="noopener noreferrer">
    <h3>Project 5: Ranked Choice Voting</h3>
  </a>
  <h4>Creator and Software Engineer</h4>
  <p>Coded as part of my Computer Science 2 class at Elon during the fall 2023 semester, this project showcases the implementation of a ranked-choice voting system in Java. The program simulates the voting process, allowing for a more democratic and representative election outcome by enabling voters to rank candidates by preference rather than choosing a single candidate.</p>
</div>

  
        </section>
<section id="fun-stuff" className="project-card">
    <h2>Fun Stuff</h2>
    
    <h3>Favorite Foods</h3>
    <ul>
      <li><a href="https://cooking.nytimes.com/recipes/1016231-pizza-margherita" target="_blank" rel="noopener noreferrer">Margherita Pizza</a></li>
      <li><a href="https://www.indianhealthyrecipes.com/chana-masala/" target="_blank" rel="noopener noreferrer">Chana Masala</a></li>
      <li><a href="https://www.loveandlemons.com/caprese-salad/" target="_blank" rel="noopener noreferrer">Caprese Salad</a></li>
      <li><a href="https://www.allrecipes.com/recipe/14231/guacamole/" target="_blank" rel="noopener noreferrer">Anything with Avocados</a></li>
    </ul>

    <h3>Favorite Movies</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=YoHD9XEInc0" target="_blank" rel="noopener noreferrer">Inception</a></li>
      <li><a href="https://www.youtube.com/watch?v=lB95KLmpLR4" target="_blank" rel="noopener noreferrer">Social Network</a></li>
      <li><a href="https://www.youtube.com/watch?v=VyHV0BRtdxo" target="_blank" rel="noopener noreferrer">Harry Potter and the Sorcerer's Stone</a></li>
    </ul>

    <h3>Favorite TV Shows</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=5jY1ecibLYo" target="_blank" rel="noopener noreferrer">Black Mirror</a></li>
      <li><a href="https://www.youtube.com/watch?v=d6kBeJjTGnY" target="_blank" rel="noopener noreferrer">Hunter x Hunter</a></li>
      <li><a href="https://www.youtube.com/watch?v=69V__a49xtw" target="_blank" rel="noopener noreferrer">Silicon Valley</a></li>
    </ul>
<h3>Favorite Songs</h3>
<ul>
  <li><a href="https://www.youtube.com/watch?v=MoN9ql6Yymw" target="_blank" rel="noopener noreferrer">Daylight by David Kushner</a></li>
  <li><a href="https://www.youtube.com/watch?v=_XG3h6LywNQ" target="_blank" rel="noopener noreferrer">Für Elise by Beethoven</a></li>
  <li><a href="https://www.youtube.com/watch?v=vzjUs5yR68o" target="_blank" rel="noopener noreferrer">Slow Dancing in the Dark by Joji</a></li>
</ul>

    <h3>Favorite Sports</h3>
    <p><p>While I enjoy watching a variety of sports, playing <a href="https://www.tennistv.com/" target="_blank" rel="noopener noreferrer">tennis</a> is my favorite way to stay active and competitive.</p>
</p>
  </section>

        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>Please let me know if you have any further questions or if there is anything else I can assist you with. I hope that you ahve a wonderful day/night!</p> 
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

