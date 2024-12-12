import React from "react";

interface Project {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Serenity.ai",
      description: "A SaaS platform for doctors and patients featuring an AI chatbot, DASS21 test, and personalized dashboards.",
    },
    {
      title: "TheWorld",
      description: "A web application listing every country globally.",
    },
    {
      title: "Blockzy",
      description: "Blockchain-based secure transactions platform.",
    },
    {
      title: "FedExBC",
      description: "Federated learning on blockchain integrated with explainable AI.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Uday Kiran Reddy N</h1>
        <p className="text-lg mt-2">Software Developer | Researcher | SaaS Enthusiast</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">About Me</h2>
          <p className="mt-4 text-lg">
            I am a software developer with experience in SaaS platforms, AI integrations, and web application development. Passionate about building scalable and secure systems, my recent work includes federated learning frameworks and explainable AI models.
          </p>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Projects</h2>
          <ul className="mt-4 space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="bg-white shadow-md p-4 rounded-md">
                <strong>{project.title}</strong>: {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Contact</h2>
          <p className="mt-4 text-lg">Email: <a href="mailto:uday410ry@gmail.com" className="text-blue-600 hover:underline">uday410ry@gmail.com</a></p>
          <p className="mt-2 text-lg">LinkedIn: <a href="https://www.linkedin.com/in/uday-kiran-reddy-n-7845b0280/" className="text-blue-600 hover:underline">www.linkedin.com/in/uday-kiran-reddy-n-7845b0280</a></p>
          <p className="mt-2 text-lg">GitHub: <a href="https://github.com/UdaykiranReddy-1" className="text-blue-600 hover:underline">github.com/UdaykiranReddy-1</a></p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Uday Kiran Reddy N. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
