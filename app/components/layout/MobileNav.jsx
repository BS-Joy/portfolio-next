"use client";

import { useEffect } from "react";

const MobileNav = () => {
  useEffect(() => {
    const hamBurger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamBurger?.addEventListener("click", () => {
      hamBurger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links").forEach((link) =>
      link.addEventListener("click", () => {
        hamBurger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );

    // Clean up event listeners on component unmount
    return () => {
      hamBurger?.removeEventListener("click", () => {});
      document
        .querySelectorAll(".nav-links")
        .forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);
  return (
    <nav className="navbar">
      <label className="logo">Bs-Joy</label>
      <ul className="nav-menu">
        <li>
          <a className="nav-links" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-links" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-links" href="#interests">
            Interests
          </a>
        </li>
        <li>
          <a className="nav-links" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default MobileNav;
