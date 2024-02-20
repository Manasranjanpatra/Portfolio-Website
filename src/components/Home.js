import React, { useEffect, useState, useMemo } from "react";
import HeroImg from "../assists/hero-img1.png";
import profileImg from "../assists/gulshan.jpg";

const Home = () => {
  const [aboutSectionOn, setAboutSectionOn] = useState(false);

  useEffect(() => {
    const isAboutSectionVisible = localStorage.getItem("aboutSectionVisible");
    if (isAboutSectionVisible === "true") {
      setAboutSectionOn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "aboutSectionVisible",
      aboutSectionOn ? "true" : "false"
    );
  }, [aboutSectionOn]);

  const handleViewMore = () => {
    setAboutSectionOn(true);
  };

  const handleFold = () => {
    setAboutSectionOn(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  const memoizedHandleFold = useMemo(() => handleFold, []); // Memoize handleFold function

  return (
    <>
      {/* hero section */}
      <section className="flex slide-left-right" id="hero-section">
        {/* left section */}
        <div className="left-section">
          <img src={HeroImg} alt="Hero Image" />
        </div>
        {/* right section */}
        <div className="right-section flex">
          <div className="right-section-heading">
            <h1>
              <span role="img" aria-label="wave">
                🖐🏻
              </span>
              Hello, I'm <span>Manas Ranjan Patra</span>
              <span style={{ fontSize: "35px" }}>😀</span>
            </h1>
            <div className="tk-blob right-section-blob">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
                <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z" />
              </svg>
            </div>
          </div>

          <p>
            I am an aspiring <span>Full stack Web Developer,</span> who is
            currently working as a <span>Freelancer</span> for National and
            International Clients.lorem ipsum gipsum karke kuch hota hai kya
            no worry about that it is just a letter harri
          </p>
          <a id="view-more-btn" href="#about-section" onClick={handleViewMore}>
            View more
          </a>

          {/* right blob */}
          <div className="tk-blob right-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
              <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z" />
            </svg>
          </div>
          {/* left blob */}
          <div className="tk-blob left-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
              <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z" />
            </svg>
          </div>
          {/* bottom right blob */}
          <div className="tk-blob bottom-right-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
              <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z" />
            </svg>
          </div>
        </div>
      </section>

      {/* all about me section */}
      <section
        className={`section ${aboutSectionOn ? "veiw-more-btn-toggle" : ""}`}
        id="about-section"
      >
        <header className="section-heading">
          All <span>About Me</span>{" "}
        </header>
        <div className="flex" id="me">
          <header>
            who <span>i am</span> <i className="fa-solid fa-user"></i>
          </header>
          {/* about me (who i am) */}
          <div id="profile" className="flex">
            <div className="profile-img">
              <img src={profileImg} alt="Gulshan Kumar Image" />
            </div>
            <div className="about-me">
              <p>
                Hello! I'm Manas, a self-taught web developer with a
                passion for creating interactive and dynamic websites. I have
                experience working with HTML, CSS, JavaScript, and React. I
                enjoy turning complex problems into simple, beautiful, and
                intuitive designs.
              </p>
              <p>
                I'm constantly learning new technologies and frameworks to
                enhance my skills and stay up-to-date with industry trends. I
                believe in writing clean, organized, and efficient code to build
                scalable and responsive web applications.
              </p>
            </div>
          </div>
          {/* about section fold btn   */}
          <button id="about-section-fold-btn" onClick={memoizedHandleFold}>
            Fold
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
