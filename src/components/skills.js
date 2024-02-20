import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import skill1 from "../assists/skills-img/c.png";
import skill2 from "../assists/skills-img/cpp.png";
import skill3 from "../assists/skills-img/python.svg";
import skill5 from "../assists/skills-img/html5.svg";
import skill6 from "../assists/skills-img/css.svg";
import skill7 from "../assists/skills-img/js.svg";
import skill8 from "../assists/skills-img/node.svg";
import skill9 from "../assists/skills-img/react.svg";
import skill10 from "../assists/skills-img/git.svg";
import skill11 from "../assists/skills-img/github.svg";
import skill12 from "../assists/skills-img/mysql logo.png";
import skill13 from "../assists/skills-img/mongodb logo.png";

const Skills = () => {
  useEffect(() => {
    const progress = document.querySelectorAll(".skill");
    const skillPercent = document.querySelectorAll(".skill-percent");

    let progressEnd = [
      { C: 90 },
      { Cpp: 85 },
      { Py: 45 },
      { Dsa: 65 },
      { Html: 75 },
      { Css: 75 },
      { Js: 75 },
      { NodeJs: 50 },
      { ReactJs: 50 },
      { Git: 80 },
      { Github: 85 },
      { Mysql: 95 },
      { Mongodb: 90 },
    ];

    function progressBar() {
      progress.forEach((el, i) => {
        let progressValue = 0;
        let progressSpeed = 0.8;
        let progressEndValue = Object.values(progressEnd[i])[0];
        let progressInterval = null;

        function animateProgress() {
          progressValue += 1;
          el.style.background = `conic-gradient(#00e600 ${
            progressValue * 3.6
          }deg, #cadcff ${progressValue * 3.6}deg)`;
          skillPercent[i].textContent = `${progressValue}%`;

          if (progressValue >= progressEndValue) {
            clearInterval(progressInterval);
          }
        }

        progressInterval = setInterval(animateProgress, progressSpeed);
      });
    }

    progressBar();
  }, []);

  // Skill component
  const Skill = ({ name, img, desc }) => {
    return (
      <div className="skill item flex">
        <header>{name}</header>
        {desc ? (
          <h3>({desc})</h3>
        ) : (
          <LazyLoadImage src={img} alt={`${name} Image`} />
        )}
        <div className="skill-percent"></div>
      </div>
    );
  };

  return (
    <section id="skills" className="flex section">
      <header className="section-heading">
        <span>my</span> - coding Skills
      </header>
      <div className="skills-container container flex">
        {/* Render each skill component */}
        <Skill name="C" img={skill1} />
        <Skill name="C++" img={skill2} />
        <Skill name="Python" img={skill3} />
        <Skill name="DSA" desc="Data Structure And Algorithm" />
        <Skill name="HTML" img={skill5} />
        <Skill name="CSS" img={skill6} />
        <Skill name="JavaScript" img={skill7} />
        <Skill name="Node.js" img={skill8} />
        <Skill name="React.js" img={skill9} />
        <Skill name="Git" img={skill10} />
        <Skill name="GitHub" img={skill11} />
        <Skill name="MySQL" img={skill12} />
        <Skill name="MongoDB" img={skill13} />
      </div>
    </section>
  );
};

export default Skills;
