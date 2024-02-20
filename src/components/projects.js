import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

// import HTML + CSS Project image
import simpleWebsite from "../assists/projects-img/html+css/simple-website.png";
import profileCard from "../assists/projects-img/html+css/profile-card.jpg";
import photographerWebsite from "../assists/projects-img/html+css/photographer-website.jpg";
import shoppingWebsite from "../assists/projects-img/html+css/shopping-website.png";
import beatsWebsite from "../assists/projects-img/html+css/beats-home-page.png";
import realEstateWebsite from "../assists/projects-img/html+css/real-estate-website.png";
import ytClone from "../assists/projects-img/html+css/yt-clone.png";

// import Vanilla Js Project Image
import calculator from "../assists/projects-img/vanilla-js/calculator.jpg";
import dayCalculator from "../assists/projects-img/vanilla-js/day-calculator.png";
import ageCalculator from "../assists/projects-img/vanilla-js/age-calculator.png";
import guessNumber from "../assists/projects-img/vanilla-js/guess-number.png";
import quizApp from "../assists/projects-img/vanilla-js/quiz-app.png";
import ytThumbnailDownloader from "../assists/projects-img/vanilla-js/yt-thumbnail-downloader.png";
import tikTakToe from "../assists/projects-img/vanilla-js/tik-tak-toe.png";
import photoEditor from "../assists/projects-img/vanilla-js/photo-editor.png";
import githubProfileSearcher from "../assists/projects-img/vanilla-js/github-profile-searcher.png";
import blogWebsite from "../assists/projects-img/vanilla-js/blog-website.jpg";

// import React Js Project Image
import portfolioWebsite from "../assists/projects-img/React-js/portfolio-website.png";

const Projects = () => {
  const [category, setCategory] = useState("HTML+CSS");

  const projects = [
    // HTML + CSS
    {
      category: "HTML+CSS",
      desc: "Simple and responsive website layout showcasing web development skills.",
      technology: ["HTML", "CSS"],
      name: "Simple Website Layout",
      date: "2023, 1, 5",
      image: simpleWebsite,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/responsive%20website",
        live: "https://ichips.gulshan07dev.repl.co/",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Profile card resembling social media profiles, highlighting CSS expertise.",
      technology: ["HTML", "CSS"],
      name: "Profile Card",
      date: "2023, 1, 15",
      image: profileCard,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/Profile%20Card",
        live: "https://profile-card.gulshan07dev.repl.co",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Visually stunning website for a photographer, demonstrating design skills.",
      technology: ["HTML", "CSS"],
      name: "Photographer Website",
      date: "2023, 1, 18",
      image: photographerWebsite,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/photographer",
        live: "https://photographer.gulshan07dev.repl.co",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Interactive shopping website with a modern UI, showcasing front-end development abilities.",
      technology: ["HTML", "CSS"],
      name: "Shopping Website",
      date: "2023, 2, 1",
      image: shoppingWebsite,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/shopkart",
        live: "https://shopkart.gulshan07dev.repl.co",
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
          "https://github.com/gulshan07dev/Full-Stack-Web-Dev/tree/main/beats",
        live: "https://beats-landing-page.gulshan07dev.repl.co",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Sleek and modern real estate website, showcasing ability to create engaging web experiences.",
      technology: ["HTML", "CSS"],
      name: "Real Estate",
      date: "2023, 3, 20",
      image: realEstateWebsite,
      links: {
        source: "",
        live: "https://real-estate.gulshan07dev.repl.co",
      },
    },
    {
      category: "HTML+CSS",
      desc: "Clone of the YouTube website, demonstrating proficiency in replicating complex UIs.",
      technology: ["HTML", "CSS"],
      name: "YouTube Clone",
      date: "2023, 4, 3",
      image: ytClone,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/youtube%20clone",
        live: "https://yt-clone.gulshan07dev.repl.co",
      },
    },
    // Vanilla Js
    {
      category: "Vanilla Js",
      desc: "Simple calculator app with [+,-,*,/,%] operations, solving modulus operator problem.",
      technology: ["HTML", "CSS", "JS"],
      name: "simple calculator",
      date: "2023, 2, 5",
      image: calculator,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/calculator",
        live: "https://calculator-app.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Days calculator app for calculating specific dates, demonstrating problem-solving skills.",
      technology: ["HTML", "CSS", "JS"],
      name: "Days Calculator",
      date: "2023, 2, 31",
      image: dayCalculator,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/days%20calculator",
        live: "https://days-calculator.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Age calculator app to calculate your age, showcasing ability to handle date calculations.",
      technology: ["HTML", "CSS", "JS"],
      name: "Age Calculator",
      date: "2023, 2, 31",
      image: ageCalculator,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/age%20calculator",
        live: "https://age-calculator.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Guess a Number game for playing and having fun, showcasing ability to create interactive games.",
      technology: ["HTML", "CSS", "JS"],
      name: "Game - Guess A Number",
      date: "2023, 2, 25",
      image: guessNumber,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/guess%20a%20number%20-%20game",
        live: "https://guess-number-game.gulshan07dev.repl.co",
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
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/QUIZ%20APP2",
        live: "https://quiz-app-2.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "YouTube Video thumbnail downloader website, demonstrating knowledge of web scraping.",
      technology: ["HTML", "CSS", "JS"],
      name: "Yt - Thumbnail Downloader",
      date: "2023, 3, 6",
      image: ytThumbnailDownloader,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/yt%20thumbnail%20downloader",
        live: "https://yt-thumbnail-downloader.gulshan07dev.repl.co",
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
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/tic%20tac%20toe%20-%20game",
        live: "https://tic-tac-toe-game.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Mini photo editor to explore various photo editing functionalities with ease.",
      technology: ["HTML", "CSS", "JS"],
      name: "Mini Photo Editor",
      date: "2023, 4, 25",
      image: photoEditor,
      links: {
        source:
          "https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/photo%20editor",
        live: "https://photo-editor.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "GitHub profile searcher to explore GitHub user profiles and their repositories.",
      technology: ["HTML", "CSS", "JS"],
      name: "GitHub Profile Searcher",
      date: "2023, 4, 29",
      image: githubProfileSearcher,
      links: {
        source: "https://github.com/gulshan07dev/github-profile-searcher",
        live: "https://github-profile-search.gulshan07dev.repl.co",
      },
    },
    {
      category: "Vanilla Js",
      desc: "Blog website to share thoughts, ideas, and experiences through dynamic blog posts.",
      technology: ["HTML", "CSS", "JS"],
      name: "Blog Website",
      date: "2023, 4, 10",
      image: blogWebsite,
      links: {
        source: "",
        live: "https://apna-blogs.gulshan07dev.repl.co",
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
        source: "https://github.com/gulshan07dev/my-portfolio",
        live: "https://my-portfolio-gulshan07dev.vercel.app/",
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
      <header className="section-heading">
        <span>my</span> - Projects
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
