// import { v4 as uuidv4 } from 'uuid';
import { generate } from 'randomized-string';
import { BiCodeAlt } from 'react-icons/bi';
import { BsStars, BsBuilding } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';
// import css from '../images/css.png';
import javascript from '../images/js.png';
import tailwind from '../images/tailwind-css.png';
import ror from '../images/rubyonrails.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import recipe from '../images/recipe.png';
import budget from '../images/budget.png';


export const projects = [
  {
    id: generate(),
    title: "MediBook",
    description: "A web app that allows users to book and track appointments with doctors.",
    image: "https://user-images.githubusercontent.com/55185309/188284939-b3f53fae-93bd-426a-a3e7-2d12eb84b923.png",
    url: "https://medibook-ui.vercel.app",
    github: "https://github.com/collinsmezie/space-travellers-react",
    technologies: [ror,react,redux,tailwind]
  },

  {
    id: generate(),
    title: "Space Traveler's Hub",
    description: "A website which enables users to browse a list of SpaceX tour rockets, make reservations and join missions.",
    image: "https://github.com/collinsmezie/space-travellers-react/blob/dev/public/spaceTravellers.png?raw=true",
    url: "https://space-travellers-react.vercel.app",
    github: "https://github.com/collinsmezie/space-travellers-react",
    technologies: [react,javascript,redux,tailwind]
  },

  {
    id: generate(),
    title: "Recipify",
    description: "Recipify keeps track of all your recipes, ingredients, inventory and enables users create custom recipes, and generate shopping list.",
    image: recipe,
    url: "https://recipeefy.herokuapp.com/",
    github: "https://github.com/collinsmezie/recipe-app",
    technologies: [ror, tailwind]
  },
 
  {
    id: generate(),
    title: "TranXact",
    description: "A simple web based application for tracking your budget.",
    image: budget,
    url: "https://tranxact-budget-app.herokuapp.com/",
    github: "https://github.com/collinsmezie/TranXact",
    technologies: [ror, tailwind]
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
    skill: 'Ruby on Rails',
  },
  {
    id: generate(),
    skill: 'React.js/Next.js',
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
    skill: 'Jest/RSpec',
  },
  {
    id: generate(),
    skill: 'PostgreSQL',
  },
  {
    id: generate(),
    skill: 'Agile Methodologies',
  },
  {
    id: generate(),
    skill: 'Git/GitHub',
  },
  {
    id: generate(),
    skill: 'Mobile/Responsive Design',
  }
]