import React from 'react'
import { Link } from 'react-router-dom'
function About() {
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

        <div className="about">
            <div>
                <img 
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph" height={300} width={200} 
                alt="male pic" />
            </div>
            <div className='paragraph'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsam aliquid iste omnis sapiente voluptatum quam hic. Porro corrupti ad obcaecati expedita pariatur, ratione nam ab eum iure repellat commodi vero, dolorum voluptas illum. Non autem ut facere. Voluptate veritatis nam adipisci perferendis natus doloremque vel eaque, qui maxime error itaque, ipsum consequuntur in blanditiis sunt. Similique alias necessitatibus eligendi aut eveniet blanditiis. Porro nam eveniet voluptatibus, dolore consequuntur provident, maxime velit magni saepe aliquid neque? Repellendus laudantium animi nobis deserunt ullam iure quam ea, pariatur quidem vel vero quae non eum voluptatum a. Repellat rerum, maiores aperiam doloremque perferendis error dignissimos obcaecati earum dolores temporibus. Iste ullam accusantium amet molestiae nobis laboriosam magni porro pariatur commodi consectetur est libero, cupiditate numquam, dolore minima id quia facilis natus quae! Deleniti quae, necessitatibus enim soluta corrupti ipsa nesciunt natus asperiores sint? Distinctio, quos consequatur odit adipisci amet ut inventore, sunt, sit incidunt iste provident. Ad reprehenderit blanditiis quia velit laborum magni cumque neque, ipsum consequatur minus possimus vero explicabo expedita cum nam fuga? Nisi perspiciatis aliquam temporibus fugiat illo autem impedit earum excepturi ullam dolore omnis reprehenderit consequatur minus voluptas, cupiditate alias sunt doloremque nemo ducimus tempore velit nulla aut corporis!</p>
            </div>
        </div>

        <div className='btn'>
            <button>Hire me</button>
        </div>
    </div>
  )
}

export default About
