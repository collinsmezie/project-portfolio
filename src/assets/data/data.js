// import { v4 as uuidv4 } from 'uuid';
import { generate } from 'randomized-string';
import { BiCodeAlt } from 'react-icons/bi';
import { BsStars, BsBuilding } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import javascript from '../images/js.png';
import tailwind from '../images/tailwind-css.png';
import ror from '../images/rubyonrails.png';
import ruby from '../images/ruby.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import recipe from '../images/recipe.png';
import budget from '../images/budget.png';
import next from '../images/next.png';
import blogapp from '../images/blogapp.png';
import SpaceX from '../images/spaceTravellers.png';
import bungalow from '../images/bungalow.png';
import mongodb from '../images/mongodb.png';
import express from '../images/express.png';
import node from '../images/node.png';







export const projects = [
  {
    id: generate(),
    title: "Tech Bloggers Haven",
    description: "An engaging web app designed for tech enthusiasts and developers to share their knowledge and insights with the world.",
    image: blogapp,
    url: "https://jamstack-blog-nine.vercel.app/",
    github: "https://github.com/collinsmezie/jamstack-blog",
    // url: "https://effortless-starburst-07cb77.netlify.app/",
    // github: "https://github.com/jssol/bookracers-frontend",
    technologies: [next,react,tailwind]
  },

  {
    id: generate(),
    title: "Space Traveler's Hub",
    description: "A website which enables users to browse a list of SpaceX tour rockets, make reservations and join missions.",
    image: SpaceX,
    url: "https://space-travellers-react.vercel.app",
    github: "https://github.com/collinsmezie/space-travellers-react",
    technologies: [react,javascript,redux,tailwind]
  },


  {
    id: generate(),
    title: "Bungalow",
    description: "Explore diverse menus, order online, and savor culinary delights and enjoy delicious cuisine delivered to your doorstep.",
    image: bungalow,
    url: "https://www.bungalowrestaurant.com/home",
    // github: "https://github.com/collinsmezie/recipe-app",
    technologies: [ mongodb, express, react, node ]
  },

  {
    id: generate(),
    title: "Recipify",
    description: "Recipify tracks your recipes, ingredients, and inventory. Users can create custom recipes and generate shopping lists.",
    image: recipe,
    url: "https://recipeefy.herokuapp.com/",
    github: "https://github.com/collinsmezie/recipe-app",
    technologies: [ruby, ror, tailwind]
  },
 
  {
    id: generate(),
    title: "TranXact",
    description: "A simple web based application for tracking your budget and monitoring your daily expenses.",
    image: budget,
    url: "https://tranxact-budget-app.herokuapp.com/",
    github: "https://github.com/collinsmezie/TranXact",
    technologies: [ruby, ror, tailwind]
  }
]

export const skills = [
  {
    id: generate(),
    icon: <BiCodeAlt />,
    text: "Building accessible and performant apps.",
  },
  {
    id: generate(),
    icon: <BsBuilding />,
    text: "Learning fast, building things that solve problems.",
  },
  {
    id: generate(),
    icon: <BsStars />,
    text: "Detailed designs and polish websites.",
  },
  {
    id: generate(),
    icon: <MdOutlineVerifiedUser />,
    text: "Responsibility and accountability.",
  }
]

export const techSkills = [
  {
    id: generate(),
    skill: 'JavaScript (ES6)',
  },
  {
    id: generate(),
    skill: 'Ruby',
  },
  {
    id: generate(),
    skill: 'Ruby on Rails',
  },
  {
    id: generate(),
    skill: 'MongoDB',
  },
  {
    id: generate(),
    skill: 'Redux',
  },
  {
    id: generate(),
    skill: 'Tailwind CSS',
  },
  {
    id: generate(),
    skill: 'ExpressJS',
  },
  {
    id: generate(),
    skill: 'PostgreSQL',
  },
  {
    id: generate(),
    skill: 'Jest/RSpec',
  },
  {
    id: generate(),
    skill: 'React.js/Next.js',
  },
  {
    id: generate(),
    skill: 'Git/GitHub',
  },
  {
    id: generate(),
    skill: 'Agile Methodologies',
  },
  {
    id: generate(),
    skill: 'NodeJs',
  },
  {
    id: generate(),
    skill: 'Algorithms and Data Structures',
  },
  {
    id: generate(),
    skill: 'Mobile/Responsive Design',
  },
]