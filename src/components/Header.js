import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">CJ Andrade / Blog</h1>
      </Link>

      <div className="header-links">
        <a href="https://www.linkedin.com/in/clebersonandrade/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" fixedWidth icon={faLinkedin} />
        </a>

        <a href="https://github.com/clebersonjose/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" fixedWidth icon={faGithubSquare} />
        </a>
      </div>
    </header>
  );
}