
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Lalit Mohnani</h1>
        <p>Full Stack Developer</p>
        <p>Email: lalit.mohnani@email.com | Phone: +91-XXXXXXXXXX | Location: City, Country</p>
        <p>LinkedIn: linkedin.com/in/lalitmohnani | GitHub: github.com/lalitmohnani</p>
      </header>
      <main>
        <section>
          <h2>Professional Summary</h2>
          <p>Experienced Full Stack Developer with a strong background in building scalable web applications using React, Node.js, and modern web technologies. Passionate about clean code, UI/UX, and continuous learning.</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript, TypeScript, React, Redux</li>
            <li>Node.js, Express, MongoDB</li>
            <li>HTML5, CSS3, SASS, Responsive Design</li>
            <li>Git, GitHub, CI/CD</li>
            <li>REST APIs, GraphQL</li>
          </ul>
        </section>
        <section>
          <h2>Experience</h2>
          <div>
            <h3>Software Engineer – Company Name</h3>
            <p>Jan 2022 – Present</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
              <li>Implemented responsive UI and optimized performance.</li>
            </ul>
          </div>
          <div>
            <h3>Frontend Developer – Previous Company</h3>
            <p>Jul 2020 – Dec 2021</p>
            <ul>
              <li>Built reusable React components and managed state with Redux.</li>
              <li>Worked closely with designers to create user-friendly interfaces.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <p>Bachelor of Technology in Computer Science<br/>University Name, 2016 – 2020</p>
        </section>
        <section>
          <h2>Certifications</h2>
          <ul>
            <li>Certified React Developer – XYZ Institute</li>
            <li>Full Stack Web Development – ABC Academy</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li><strong>Project Name 1:</strong> Description of project 1.</li>
            <li><strong>Project Name 2:</strong> Description of project 2.</li>
          </ul>
        </section>
      </main>
      <footer className="resume-footer">
        <p>&copy; {new Date().getFullYear()} Lalit Mohnani</p>
      </footer>
    </div>
  );
}

export default App;
