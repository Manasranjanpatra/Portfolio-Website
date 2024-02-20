import React, { useEffect, useState } from "react";
import logo from "../assists/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const menu = document.querySelectorAll(".menu a");
    menu.forEach((el) => {
      el.addEventListener("click", scrollTop);
    });
  }, []);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    setDarkMode(storedDarkMode === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const toggleMenu = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu-toggle");
    };

    const closeMenu = (e) => {
      const menu = document.querySelector(".menu");
      if (!e.target.closest(".menu") && !e.target.closest("#bars")) {
        menu.classList.remove("menu-toggle");
      }
    };

    const menuBtn = document.querySelector("#bars");
    const navLinks = document.querySelectorAll(".menu a");

    menuBtn.addEventListener("click", toggleMenu);
    window.addEventListener("click", closeMenu);
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
      window.removeEventListener("click", closeMenu);
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (
    <nav className="flex">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu flex">
        <NavLink to="/" exact="true" className="flex">
          <i className="fa fa-solid fa-home"></i>
          <p>Home</p>
        </NavLink>

        <div className="line"></div>

        <NavLink to="/skills" className="flex">
          <i className="fa-sharp fa-solid fa-person-chalkboard"></i>
          <p>Skills</p>
        </NavLink>

        <div className="line"></div>

        <NavLink to="/projects" className="flex">
          <i className="fa-sharp fa-solid fa-diagram-project"></i>
          <p>Projects</p>
        </NavLink>

        <div className="line"></div>

        <NavLink to="/services" className="flex">
          <i class="fa-solid fa-desktop"></i>
          <p>Services</p>
        </NavLink>

        <div className="line"></div>

        <NavLink to="/contact" className="flex">
          <i className="fa-sharp fa-solid fa-user"></i>
          <p>Contact US</p>
        </NavLink>

        <div className="line"></div>

        <div id="dark-icon" className="flex" onClick={toggleDarkMode}>
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <div id="bars">
        <i className="fa-solid fa-bars fa-beat"></i>
      </div>
    </nav>
  );
};

export default Header;
