import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 text-white">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold tracking-wide">
          Hi, I'm <span className="text-indigo-400">Aromal Vasanth</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          MCA Student • Aspiring Software Developer
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition">
          View My Work
        </button>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-indigo-400 pl-4">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am an MCA student passionate about web development, system programming,
          and problem solving. I enjoy building clean UI, learning new technologies,
          and working on real-world projects.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-black/40 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Python", "JavaScript", "React", "HTML & CSS", "Linux", "Shell Scripting"].map(skill => (
              <div
                key={skill}
                className="bg-gray-800 hover:bg-indigo-600 transition rounded-xl p-6 text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-indigo-400">
              Student Management System
            </h3>
            <p className="text-gray-300 mt-2">
              A system to manage student data, attendance, and performance.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-indigo-400">
              Linux Automation Scripts
            </h3>
            <p className="text-gray-300 mt-2">
              Shell scripts for automation, file handling, and system tasks.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-black/40 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-300">📧 aromal@example.com</p>
        <p className="text-gray-300">🐙 github.com/aromal</p>
        <p className="text-gray-300">💼 linkedin.com/in/aromal</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Aromal Vasanth • Built with React
      </footer>
    </div>
  );
};

export default App;
