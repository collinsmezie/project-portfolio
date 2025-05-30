import React from "react";
import { v4 as uuidv4 } from 'uuid';
// import { Link } from "react-router-dom";


export default function Project({ title, ownership, description, image, url, github, technologies }) {

  return (
    <div className="flex flex-col max-w-sm shadow-lg" data-aos="fade-up" data-aos-delay="100">
      <img className="object-cover h-auto" src={image} alt={title} />
      <div>
        <h3 className="py-2 my-4 text-3xl font-light text-white font-spectral">{title}</h3>
        <div className="py-2">
          <p className="text-base font-semibold text-white md:hover:animate-none">Project Owner: {ownership}</p>
        </div>
        <div className="py-2">
          {description}
        </div >
        <div className="py-2 project">
          <p className="text-base font-semibold text-white md:hover:animate-none">BUILT WITH:</p>
          {technologies.map((technology, index) =>
            <img key={uuidv4()} src={technology} width={40} height={40} />
          )}
        </div >
        <div className="view">
          {/* <button onClick={() => {window.location.href=url}} target="_blank" className="text-base font-semibold text-white md:hover:text-teal-300 md:hover:animate-none">
            VIEW PROJECT &gt;
          </button> */}

          <button onClick={() => {window.location.href=url}} className="border px-8 mt-6 py-1 border-teal-300 bg-transparent hover:bg-teal-300 hover:border ease-in-out duration-700 transition-colors text-teal-300 hover:text-black font-bold w-max sticky z-[11]">VIEW PROJECT DEMO</button>


          {/* <a href={github} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white md:hover:text-teal-300 md:hover:animate-none">
            VIEW SOURCE &gt;
          </a> */}
        </div>
      </div>
    </div>
  )
}