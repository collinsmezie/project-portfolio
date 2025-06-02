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
import pharma from '../images/pharma.png';
import postgres from '../images/postgresql.png';
import ajozave from '../images/ajozave.png'
import nest from '../images/nest.png';
import productPadi from '../images/productPadi.png';
import dashboard from '../images/BC-dashboard.png';
import contentful from '../images/contentful.png';




export const projects = [

  {
    id: generate(),
    title: "AjoZave",
    owner: "personal",
    description: "Ajozave is a mobile platform for automated group savings, simplifying contributions, payouts, and management.",
    image: ajozave,
    url: "https://ajozave-admin-account.vercel.app",
    // github: "https://github.com/collinsmezie/recipe-app",
    technologies: [node, react, express, tailwind]
  },

  {
    id: generate(),
    title: "BananaCrystal",
    owner: "company",
    description: "Contributed to the API development of BananaCrystal.com a global FINTECH company that facilitates the Peer-To-Peer Trading of USD with any Currency.",
    image: dashboard,
    url: "https://bananacrystal.com",
    // github: "https://github.com/collinsmezie/recipe-app",
    technologies: [react, ror, postgres]
  },

  {
    id: generate(),
    title: "Product Padi",
    owner: "client",
    description: "Contributed to the development of Product Padi, a platform that allows users to create and manage product roadmaps, track progress, and collaborate with team members.",
    image: productPadi,
    url: "https://productpadi.app/",
    // github: "https://github.com/collinsmezie/recipe-app",
    technologies: [node, mongodb, react, express, tailwind]
  },

  {
    id: generate(),
    title: "Bungalow",
    owner: "personal",
    description: "Explore diverse menus, order online, and savor culinary delights and enjoy delicious cuisine delivered to your doorstep.",
    image: bungalow,
    url: "https://www.bungalowrestaurant.com/home",
    // github: "https://github.com/collinsmezie/recipe-app",
    technologies: [mongodb, express, react, node]
  },

  {
    id: generate(),
    title: "Space Traveler's Hub",
    owner: "personal",
    description: "A website which enables users to browse a list of SpaceX tour rockets, make reservations and join missions.",
    image: SpaceX,
    url: "https://space-travellers-react.vercel.app",
    // github: "https://github.com/collinsmezie/space-travellers-react",
    technologies: [react, javascript, redux, tailwind]
  },

  {
    id: generate(),
    title: "Tech Bloggers Haven",
    owner: "personal",
    description: "An engaging web app designed for tech enthusiasts and developers to share their knowledge and insights with the world.",
    image: blogapp,
    url: "https://jamstack-blog-nine.vercel.app/",
    // github: "https://github.com/collinsmezie/jamstack-blog",
    technologies: [next, contentful, react, tailwind]
  },

  // {
  //   id: generate(),
  //   title: "Recipify",
  //   description: "Recipify tracks your recipes, ingredients, and inventory. Users can create custom recipes and generate shopping lists.",
  //   image: recipe,
  //   url: "https://recipeefy.herokuapp.com/",
  //   // github: "https://github.com/collinsmezie/recipe-app",
  //   technologies: [ruby, ror, tailwind]
  // },

  // {
  //   id: generate(),
  //   title: "TranXact",
  //   description: "A simple web based application for tracking your budget and monitoring your daily expenses.",
  //   image: budget,
  //   url: "https://tranxact-budget-app.herokuapp.com/",
  //   // github: "https://github.com/collinsmezie/TranXact",
  //   technologies: [ruby, ror, tailwind]
  // },

  // {
  //   id: generate(),
  //   title: "Eastern Pharma",
  //   description: "Advancing modern medicine, improving lives, and leading the way in biomedical innovation.",
  //   image: pharma,
  //   url: "https://easternlightpharma.com/",
  //   // github: "https://github.com/collinsmezie/TranXact",
  //   technologies: [postgres, express, react, node]
  // }
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
    skill: 'JavaScript (ES6)/TypeScript',
  },
  {
    id: generate(),
    skill: 'NestJS',
  },
  {
    id: generate(),
    skill: 'AWS',
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