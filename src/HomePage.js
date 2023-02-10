import React from "react";
import htmlLogo from "./html.png";
import cssLogo from "./css.png";
import javascriptLogo from "./javascript.png";
import reactLogo from "./react.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="name">Yuki Terashima</h1>
      <p className="introduction">
        Web開発を勉強中です。よろしくお願いします。
      </p>
      <h2 className="skills-title">スキル</h2>
      <ul className="skills">
        <li>
          <img src={htmlLogo} alt="HTML logo" />
          <p>HTML</p>
        </li>
        <li>
          <img src={cssLogo} alt="CSS logo" />
          <p>CSS</p>
        </li>
        <li>
          <img src={javascriptLogo} alt="JavaScript logo" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src={reactLogo} alt="React logo" />
          <p>React</p>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
