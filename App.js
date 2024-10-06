import './App.css';  // Importing CSS styles
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded");

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute('href'); // Get the href attribute
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});

// React functional component
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <h1 className="logo">Portfolio</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#goals">Goals</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section className="hero">
      <h2>Hi, I'm Athul S</h2>
      <p>A Master's student in Computer Science specializing in Digital Image Computing.</p>
      <a href="#projects" className="cta-btn">View My Works</a>
    </section>
  );
}

// About Section Component
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am an M.Tech student with a passion for developing innovative software solutions and working on data-driven projects. My academic background in Computer Science has equipped me with a strong foundation in programming, algorithms, and software engineering principles.</p>
      <p>I enjoy tackling complex problems and am always eager to learn new technologies. I aim to combine my technical skills and creativity to develop impactful projects that make a difference.</p>
    </section>
  );
}

// Skills Section Component
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-grid">
        <div className="skill-card">Python</div>
        <div className="skill-card">C</div>
        <div className="skill-card">Java</div>
        <div className="skill-card">MySQL</div>
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
      </div>
    </section>
  );
}

// Projects Section Component
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Computer Vision Based Field Management System</h3>
          <p>OCR System to extract relevant text information from images and categorizes data based on predefined criteria.</p>
          <a href="https://github.com/Athulrs2001/portfolio/blob/main/project%201.pdf" target="_blank" rel="noopener noreferrer" className="view-report-btn">
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Patient Data Management Using Blockchain</h3>
          <p>Health record management.</p>
          <a href="https://github.com/Athulrs2001/portfolio/raw/refs/heads/main/Patient%20data%20mgmt%20using%20blockchain%20report.docx" target="_blank" rel="noopener noreferrer" className="view-report-btn">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

// Goals Section Component
function Goals() {
  return (
    <section id="goals" className="goals">
      <h2>My Goals</h2>
      <div className="goal-list">
        <div className="goal-card">
          <h3>Short-Term Goals</h3>
          <ul>
            <li>Enhance Programming Skills: Dedicate time to improve my proficiency in key programming languages such as Python, Java, and JavaScript through online courses and coding challenges.</li>
            <li>Internship Experience: Secure an internship at a reputable tech company to gain practical experience and improve my professional skills in software development or data science.</li>
            <li>Networking: Attend workshops, seminars, and tech meetups to connect with industry professionals and fellow students, expanding my professional network.</li>
          </ul>
        </div>
        <div className="goal-card">
          <h3>Long-Term Goals</h3>
          <ul>
            <li>Pursue a PhD: Consider pursuing a PhD in Computer Science or a related field to further deepen my knowledge and contribute to research in areas such as artificial intelligence or machine learning.</li>
            <li>Continuous Learning: Commit to lifelong learning by staying updated with the latest technologies and advancements in the tech industry, attending workshops, and pursuing relevant certifications.</li>
            <li>Contribute to Open Source: Actively contribute to open-source projects to enhance my coding skills, collaborate with developers worldwide, and build a strong portfolio.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-methods">
        <div className="contact-method">
          <h3>Email</h3>
          <p>athulrs010@gmail.com</p>
          <a href="mailto:athulrs010@gmail.com" className="contact-btn">Send an Email</a>
        </div>
        <div className="contact-method">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/athul-s-240b03231</p>
          <a href="https://www.linkedin.com/in/athul-s-240b03231" target="_blank" rel="noopener noreferrer" className="contact-btn">View Profile</a>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Athul's Portfolio</p>
    </footer>
  );
}

// Exporting App component as default
export default App;
