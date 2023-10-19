import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Home() {
  return (
    <>
        <div className="nav-container">
          <h1>Mortal</h1>
                <div className="list-container">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              </div>
        </div>

        <div className="info-container">
            <h1>Hi,</h1>
            <h1>I'am <span>Mortal</span> </h1>
           
            <div className="img-container">
            <h1>Front End Developer</h1>
                <img 
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph" alt="pic" height={400} width={400} />
            </div>
        </div>

    </>
  );
}

export default Home;
