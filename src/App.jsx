import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>Aromal Vasanth</h1>
        <p style={styles.title}>MCA Student | Aspiring Software Developer</p>
      </header>

      {/* About Section */}
      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I am an MCA student with a strong interest in software development,
          web technologies, and problem-solving. I enjoy learning new tools and
          building real-world projects.
        </p>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Linux & Shell Scripting</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>Student Management System</li>
          <li>Linux Automation Scripts</li>
          <li>Personal Portfolio Website</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Email: aromal@example.com</p>
        <p>GitHub: github.com/aromal</p>
        <p>LinkedIn: linkedin.com/in/aromal</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Aromal Vasanth</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  name: {
    fontSize: "2.5rem",
    margin: 0,
  },
  title: {
    color: "#555",
  },
  section: {
    marginBottom: "25px",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#777",
  },
};

export default App;
