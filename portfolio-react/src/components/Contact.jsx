import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
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

            <div className="contact">
                <label htmlFor="Name">Name</label>
                <input type="text" />
                <label htmlFor="Phone">Phone</label>
                <input type="text" />
                <label htmlFor="Email">Email</label>
                <input type="email" />
            </div>
            <div className="btn2">
            <button>Submit</button>

            </div>


    </div>
  )
}

export default Contact
