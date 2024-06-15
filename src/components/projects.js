import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

// import HTML + CSS Project image
import NetflixClone from "../assists/projects-img/html+css/Netflix-clone.png";
import DeliveryWebsite from "../assists/projects-img/html+css/delivery.png";
import travel from "../assists/projects-img/html+css/travel.png";
import furniture from "../assists/projects-img/html+css/Funiture.png";
import beatsWebsite from "../assists/projects-img/html+css/beats-home-page.png";
import flipkart from "../assists/projects-img/html+css/flipkart.png";


// import Vanilla Js Project Image
import calculator from "../assists/projects-img/vanilla-js/calculator.png";
import Music from "../assists/projects-img/vanilla-js/Music.png";
import AgeCalculator from "../assists/projects-img/vanilla-js/agecalculator.png";
import  Clippath from "../assists/projects-img/vanilla-js/clip.png";
import quizApp from "../assists/projects-img/vanilla-js/quiz.png";
import Clock from "../assists/projects-img/vanilla-js/clock.png";
import tikTakToe from "../assists/projects-img/vanilla-js/tictactoe.png";

import Dragdrop from "../assists/projects-img/vanilla-js/dragdrop.png";


// import React Js Project Image
import portfolioWebsite from "../assists/projects-img/React-js/portfolio.png";
import Weather from "../assists/projects-img/React-js/weather.png";
import Movie from "../assists/projects-img/React-js/movie.png";
import Speech from "../assists/projects-img/React-js/speech.png";
import TodoApp from "../assists/projects-img/React-js/todo.png";


// import full stack project
import Chat from "../assists/projects-img/Full Stack/chat.png";
import ecommerce from "../assists/projects-img/Full Stack/ecommerce.png";



const Projects = () => {
  const [category, setCategory] = useState("HTML+CSS");

  const projects = [
    // HTML + CSS
    {
      category: "HTML+CSS",
      desc: "Simple and responsive website layout showcasing web development skills.",
      technology: ["HTML", "CSS"],
      name: "Netflix Clone",
      date: "2023, 1, 5",
      image: NetflixClone,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Netflix-clone.git",
        live: "https://netflixmainclone.netlify.app",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Delivery Your products which you order from our website,within the date.",
      technology: ["HTML", "CSS"],
      name: "Delivery Website",
      date: "2023, 1, 15",
      image: DeliveryWebsite,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/Profile%20Card",
        live: "https://profile-card.gulshan07dev.repl.co",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Visually stunning website for a traveller, demonstrating design skills.",
      technology: ["HTML", "CSS"],
      name: " Travel&Tour Website ",
      date: "2023, 1, 18",
      image:travel ,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Travel-Tour-Website.git",
        live: "https://travel-tour-websites.netlify.app",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Interactive shopping website with a modern UI, showcasing front-end development abilities.",
      technology: ["HTML", "CSS"],
      name: "Furniture Website",
      date: "2023, 2, 1",
      image: furniture,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Funiture-Website.git",
        live: "https://furniture-websitecom.netlify.app",
      },
    },
 
    {
      category: "HTML+CSS",
      desc: "clone of flipkart showcasing skills with responsive website",
      technology: ["HTML", "CSS"],
      name: "Flipkart clone",
      date: "2023, 3, 20",
      image: flipkart,
      links: {
        source: "https://github.com/Manasranjanpatra/Flipkart-.git",
        live: "https://flipkartmaincom.netlify.app",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Captivating landing page for Beats, highlighting attention to detail in web design.",
      technology: ["HTML", "CSS"],
      name: "Beats Landing Page",
      date: "2023, 3, 15",
      image: beatsWebsite,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Beast.git",
        live: "https://beastlandingpage.netlify.app",
      },
    },
   
    // Vanilla Js
    {
      category: "Vanilla Js",
      desc: "Simple calculator app with [+,-,*,/,%] operations, solving modulus operator problem.",
      technology: ["HTML", "CSS", "JS"],
      name: " calculator",
      date: "2023, 2, 5",
      image: calculator,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Calculator.git",
        live: "https://calculators-com.netlify.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Music app to listen any music,you can increase or decrease the length of the song",
      technology: ["HTML", "CSS", "JS"],
      name: "Music app",
      date: "2023, 2, 31",
      image: Music,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Music-App.git",
        live: "https://music-app-rho-ten.vercel.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Age calculator app to calculate your age, showcasing ability to handle date calculations.",
      technology: ["HTML", "CSS", "JS"],
      name: "Age Calculator",
      date: "2023, 2, 31",
      image: AgeCalculator,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Age-Calculator.git",
        live: "https://agecalculators-com.netlify.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "show all the slipc present in the geometry mathmatics",
      technology: ["HTML", "CSS", "JS"],
      name: "Clip-Path",
      date: "2023, 2, 25",
      image: Clippath,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Clip-path.git",
        live: "https://clip-pathcom.netlify.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Quiz application to play and enhance knowledge, showcasing ability to create interactive quizzes.",
      technology: ["HTML", "CSS", "JS"],
      name: "Quiz App",
      date: "2023, 5, 7",
      image: quizApp,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Quizapp.git",
        live: "https://quizapp-niok.vercel.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Exactly like a wall colsk , showing real time",
      technology: ["HTML", "CSS", "JS"],
      name: " Clock ",
      date: "2023, 3, 6",
      image: Clock,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Clock-.git",
        live: "https://clock-psi-tan.vercel.app",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Tic Tac Toe game, showcasing ability to create interactive games.",
      technology: ["HTML", "CSS", "JS"],
      name: "Game - Tic Tac Toe",
      date: "2023, 3, 17",
      image: tikTakToe,
      links: {
        source:
          "https://github.com/Manasranjanpatra/Tictac-toe.git",
        live: "https://tic-tac-toe-game.gulshan07dev.repl.co",
      },
    },
 
    {
      category: "Vanilla Js",
      desc: "Easily drag and drop item to one side to another",
      technology: ["HTML", "CSS", "JS"],
      name: " Drag & Drop",
      date: "2023, 4, 29",
      image: Dragdrop,
      links: {
        source: "https://github.com/gulshan07dev/github-profile-searcher",
        live: "https://github-profile-search.gulshan07dev.repl.co",
      },
    },
   
    // React Js
    {
      category: "React Js",
      desc: "Portfolio website to showcase skills, projects, and achievements in an elegant and interactive manner.",
      technology: ["ReactJs"],
      name: "Portfolio Website",
      date: "2023, 6, 3",
      image: portfolioWebsite,
      links: {
        source: "https://github.com/Manasranjanpatra/Portfolio-Website.git",
        live: "https://portfolio-website-two-psi-34.vercel.app/",
      },
    },
    {
      category: "React Js",
      desc: "search the weather condition of any country by clicking on the search button",
      technology: ["ReactJs"],
      name: "Weather App",
      date: "2023, 6, 3",
      image: Weather,
      links: {
        source: "https://github.com/Manasranjanpatra/Weather-app.git",
        live: "https://weathermain-com.netlify.app/",
      },
    },
    {
      category: "React Js",
      desc: "Search any movie slick on image show its single movie description",
      technology: ["ReactJs"],
      name: "Movie Website",
      date: "2023, 6, 3",
      image: Movie,
      links: {
        source: "https://github.com/Manasranjanpatra/Movieapp.git",
        live: "https://moviemain-com.netlify.app/",
      },
    },
    {
      category: "React Js",
      desc: "it listen what you talk and also stop,sopy to clipboard funtionality",
      technology: ["ReactJs"],
      name: "Speech Recognisation",
      date: "2023, 6, 3",
      image: Speech,
      links: {
        source: "https://github.com/Manasranjanpatra/Speech-Recognisation.git",
        live: "https://speech-recognisation-com.netlify.app/",
      },
    },
    {
      category: "React Js",
      desc: "To work properly in a day creayed atodo list, so that you remeber your task",
      technology: ["ReactJs"],
      name: "Todo App",
      date: "2023, 6, 3",
      image: TodoApp,
      links: {
        source: "https://github.com/Manasranjanpatra/TodoApp.git",
        live: "https://todomain-com.netlify.app/",
      },
    },
    // Full Stack
    
    {
      category: "Full Stack",
      desc: "Ecommerce website to showcase home, products, and orders in an elegant and interactive manner.",
      technology: ["html","css","js","MERN"],
      name: "E-commerce Website",
      date: "2023, 6, 3",
      image: ecommerce,
      links: {
        source: "https://github.com/Manasranjanpatra/E-commerce-Website.git",
        live: "https://ecommercemain-com.netlify.app",
      },
    },
    {
      category: "Full Stack",
      desc: "Created a real time chating website using MERN stack",
      technology: ["ReactJs",["MERN"]],
      name: "Real Time Chatting App",
      date: "2023, 6, 3",
      image: Chat,
      links: {
        source: "https://github.com/Manasranjanpatra/Mern-chat-app.git",
        live: "https://mern-chat-app-1-b0vm.onrender.com",
      },
    },
  ];

  const renderProjects = () => {
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );

    if (filteredProjects.length === 0) {
      return <p className="not-present">No projects available!</p>;
    }

    return filteredProjects.map((project, index) => (
      <div className="project item flex slide-left-right" key={index}>
        <header>{project.name}</header>
        <div className="main-part">
          <img src={project.image} alt={`project${index + 1}Image`} />
          <span className="up-date">
            • {formatDistanceToNow(new Date(project.date), { addSuffix: true })}
          </span>
        </div>
        <ul className="flex technology">
          {project.technology.map((tech, techIndex) => (
            <li key={techIndex}>{tech}</li>
          ))}
        </ul>
        <p className="description">{project.desc}</p>
        <div className="btn-container flex">
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-beat" />
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-eye fa-beat" />
          </a>
        </div>
      </div>
    ));
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <section id="projects" className="flex projects section">
      <header className="section-heading2">
      <h2 id=""> My projects</h2>
      </header>
      <div className="project-filter flex">
        <button
          className={category === "HTML+CSS" ? "filter-active-btn" : ""}
          onClick={() => handleCategoryChange("HTML+CSS")}
        >
          HTML+CSS
        </button>
        <button
          className={category === "Vanilla Js" ? "filter-active-btn" : ""}
          onClick={() => handleCategoryChange("Vanilla Js")}
        >
          Vanilla Js
        </button>
        <button
          className={category === "React Js" ? "filter-active-btn" : ""}
          onClick={() => handleCategoryChange("React Js")}
        >
          React Js
        </button>
        <button
          className={category === "Full Stack" ? "filter-active-btn" : ""}
          onClick={() => handleCategoryChange("Full Stack")}
        >
          Full Stack
        </button>
      </div>
      <div className="project-container container flex">{renderProjects()}</div>
    </section>
  );
};

export default Projects;
