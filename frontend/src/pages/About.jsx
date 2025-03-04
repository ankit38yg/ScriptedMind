import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto p-4 space-y-9 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white" >
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-orange-600 font-semibold hover:scale-105 duration-500">
          Ankit Yadav
        </strong>{" "}
        a passionate and results-driven full-stack developer with expertise in building scalable, high-performance web applications. With a strong foundation in both front-end and back-end technologies, I thrive on solving complex problems and creating seamless digital experiences.
      </p>
      <h2 className="font-semibold text-cyan-700 text-xl">
        Technical Expertise:
      </h2>
      <p>
      Front-End: Proficient in React.js, JavaScript, HTML5, CSS3, and modern UI frameworks like Bootstrap. Capable of building responsive, user-friendly, and aesthetically appealing interfaces.
      Back-End: Skilled in Node.js, Express.js, and MongoDB, ensuring robust and efficient server-side operations. Experience in managing databases like MySQL for structured data storage.
      DevOps & Cloud: Knowledgeable in Docker for containerized application deployment, ensuring scalability and efficient resource management. Familiar with version control (Git, GitHub) and cloud platforms for seamless development workflows.
      Tools & Platforms: Proficient in VS Code, IntelliJ IDEA, and experienced in working with RESTful APIs for seamless data communication.
      Additional Skills: Problem-solving on LeetCode, video editing, and continuously adapting to emerging technologies.
      </p>
      <h2 className="font-semibold text-cyan-700 text-xl">
        Professional Highlights:
      </h2>
      <p>
      ✔Developed "<span className="text-orange-500 font-semibold">Frooms</span>", a location-based accommodation and dining finder, enhancing user convenience with real-time distance calculations and budget filtering.<br></br>
      ✔  Created "<span className="text-orange-500 font-semibold">ScriptedMind</span>ScriptedMind", a blogging platform where I share insights, experiences, and technical knowledge on web development, programming, and industry trends.<br></br>
      ✔ Built "<span className="text-orange-500 font-semibold">Samvaad</span>", a real-time chat web application designed for seamless communication, featuring instant messaging, secure authentication, and an interactive user interface.<br></br>
      ✔<span className="text-orange-500 font-semibold">Interned at Hindalco Industries</span> , developing a QR Code Generator and Scanner with Oracle Apex for efficient product tracking in import/export processes.
      </p>
      <h2 className="font-semibold text-cyan-700 text-xl">
       Passion & Drive:
      </h2>
      <p>
      I am committed to staying ahead in the ever-evolving tech landscape, continuously learning and integrating new advancements into my projects. Whether optimizing front-end performance, enhancing back-end efficiency, or deploying applications with <span className="text-orange-500 font-semibold">Docker</span>, I take pride in delivering top-tier solutions.
      Let’s connect and build something remarkable together! 🚀
      </p>
    </div>
  );
}

export default About;
