import React from "react";
import Form from "../components/form";
import { projects, techSkills } from "../assets/data/data";
import Project from "../components/project";
import { Link } from "react-router-dom";

export default function Welcome() {

  return (
    <div className="mx-auto mb-10 home">
      
      <section id="intro" className="flex flex-col justify-center" aria-label="intro">
        <h1 className="flex flex-col justify-center h-screen max-w-5xl mx-auto mb-4 text-4xl leading-[50px] tracking-tight text-center text-white font-extralight md:text-8xl font-spectral">
          <span className="font-light">Software <span className="text-teal-300">Developer.</span></span>
          <span>Building <span className="italic">Scalable & Secure</span> <br/> applications.</span>
        </h1>
        <div className="gap-10 my-10 md:flex">
          <p>Over the years as a software developer, I have had the privilege of collaborating with highly skilled professionals in both development and design. This collaboration has significantly elevated my standards for software applications, prompting a refined approach to product development.</p>
          <p>Throughout these experiences, I have cultivated a commitment to crafting software products that transcend mere aesthetic appeal and user-friendliness. I am dedicated to ensuring that the underlying codebase is characterized by qualities of the best practices in software engineering.</p>
        </div>
        <Link to="/contact" className="border px-8 mt-6 py-1 border-teal-300 bg-transparent hover:bg-teal-300 hover:border ease-in-out duration-700 transition-colors text-teal-300 hover:text-black font-bold w-max sticky z-[11]">Get in touch</Link>
      </section>
      
      <section id="skills" data-aos="fade-right" aria-label="my tech skills" className="my-20">
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">My Skills</h2>
        <p className="py-10 md:w-2/3">Through my experience and education, I've gained a solid understanding of computer science and web development concepts, and I've dedicated a lot of time to apply them in the real world.</p>
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-x-4 w-full text-base list-[square] justify-between">
          {techSkills.map(skill =>
            <li key={skill.id} className="flex mb-4 items-center">
              <span className="mr-4 text-teal-300 rounded-full">
                <svg width="10" height="10" viewBox="0 0 20 20" className="fill-current">
                  <path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path>
                </svg>
              </span>
              {skill.skill}
            </li>
          )}
        </ul>
      </section>
      
      <section id="what-im-working-on" data-aos="fade-right" aria-label="My projects" className="my-20">
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">What I've been working on</h2>
        <p className="py-10 md:w-2/3">I enjoy building projects. I get to gain new experiences with each project and also work on something interesting. Take a look at some of the projects I've dedicated my time to.</p>
        <div id="projects-section" className="grid w-full grid-cols-1 gap-32 md:grid-cols-2 lg:mb-0">
          {projects.map(project =>
            <Project key={project.id} title={project.title} ownership={project.owner} description={project.description} technologies={project.technologies} url={project.url} github={project.github} image={project.image} />
          )}
        </div>
      </section>
      
      <section aria-label="contact me" className="mt-10">
        <h2 className="text-4xl font-light text-white md:text-5xl font-spectral">Let's build something together</h2>
        <p className="py-10 md:w-2/3">Feel free to reach out if you're looking for a developer, have a project idea you’d like me to work on, have a question, or looking to make a new connection.
        </p>
        <a href="mailto:collinschimezieobinwa@gmail.com" className="pb-2 font-semibold border-b border-teal-300">collinschimezieobinwa@gmail.com</a>
        <Form />
      </section>
      
    </div>
  );
}