import React, { useEffect } from "react";
import photo from "../assists/photo.jpg.jpg";
import Typed from "typed.js";


const Ghar = () => {
  useEffect(() => {
    var typed = new Typed(".change", {
      strings: [
        " Frontend Developer !",
        " UI/UX Designer !",
        "Web Developer !",
      ],
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy(); // Cleanup Typed instance on component unmount
    };
  }, []);

  return (
    <div className="ghar griid">
      <div className="content">
        <h1 id="f1">
          Hello 🖐️ I'm <span id="name">Manas Ranjan Patra</span> 🥰
        </h1>
        <h1 className="conh1">
          I'm a <span className="change">Coder !</span>
        </h1>
        <p className="self">
          I'm a passionate and dedicated web developer with a strong background
          in designing and building user-friendly websites and applications.  I thrive on bringing innovative ideas to life and pushing the boundaries of what's possible on the web.
        </p>
        <div className="iconss">
          <a href="https://youtube.com/@chinupatra_05?si=1M0TEGKZzGfuZrMu">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/chinu.patra.948">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/Manasranjanpatra">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="http://t.me/Manasrpatra">
            <i className="fa-brands fa-telegram"></i>
          </a>

          <a href="https://www.linkedin.com/in/manas-ranjan-patra-6b9a11274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="resume">
          <a href="https://drive.google.com/file/d/1fJcIturDu_SLnu_YL9qcmFSWn66YjMRu/view?usp=sharing" >
            {" "}
            <button download>Download Cv</button>
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={photo} alt="hello" />
      </div>
    </div>
  );
};

export default Ghar;
