import React from "react";
import { MdSafetyDivider } from "react-icons/md";
import myphoto from '../assets/images/potr.jpg';

export default function About() {
  return (
    <div className="relative flex flex-col items-center px-6 pb-10 mb-20 leading-7 lg:leading-10 mt-28 md:mt-36">
      <div className="static z-10 mx-auto w-4/4 md:w-3/4">
        <h1 className="mb-10 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-teal-300 to-amber-500">Genesis . Journey</h1>
        <div className="flex flex-col-reverse gap-12 mb-10 md:grid md:grid-cols-4 lg:mb-6">
          <div className=" md:col-span-3">
            I'm a full-stack software developer. Interested in building solutions for the Artificial Intelligence industry and also solutions that help us live better as humans.<br />

            Over the years, I've taken a detour, fixating on AI, cloud, and programming before landing in the tech world. <br />
            <h2 className="my-4 text-xl text-white lg:text-2xl">Here's a timeline of the experience I've gathered over the years.</h2>

            As a Sales person at a Book store, I got my first tech experience reading books on tech. I had no experience writing codes, but later on I joined a remote bootcamp where I worked with developers and designers to troubleshoot website issues and create new landing pages. After two years, I gained a wealth of knowledge about business and how developers bring concepts to life.<br />

            <h2 className="my-4 text-xl text-white lg:text-2xl">Circling back;</h2>
            I decided to learn to code in JavaScript, focusing on web applications and cloud computing. It was an eye-opening experience.<br />

            After a few years, I've had the chance to build unique projects with incredible developers from countries across Africa and Europe. I'm currently concentrating on React web development and would love to work with Cloud-tech or AI-focused companies.<br />

            When I'm not behind a computer screen, you can find me at the gym or playing video games.
          </div>
          <img src={myphoto} alt="Headshot" className="h-auto rounded-full w-36 md:rounded-2xl md:w-auto" />
        </div>
      </div>
    </div>
  );
}