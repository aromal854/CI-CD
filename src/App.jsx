import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white flex justify-center">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl px-6 py-12 text-center">

        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Aromal Vasanth</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          MCA Student • Aspiring Software Developer
        </p>

        <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition mb-16">
          View My Work
        </button>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am an MCA student passionate about web development, system
            programming, and problem solving. I enjoy building clean UI,
            learning new technologies, and working on real-world projects.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "Python",
              "JavaScript",
              "React",
              "HTML & CSS",
              "Linux",
              "Shell Scripting",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-md py-4 rounded-xl hover:bg-indigo-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                Student Management System
              </h3>
              <p className="text-gray-300">
                A system to manage student data, attendance, and performance.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                Linux Automation Scripts
              </h3>
              <p className="text-gray-300">
                Shell scripts for automation, file handling, and system tasks.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-400 text-sm">
          © 2026 Aromal Vasanth • Built with React
        </footer>

      </div>
    </div>
  );
};

export default App;
