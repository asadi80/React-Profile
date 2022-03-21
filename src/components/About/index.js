import React from 'react';
import aboutImage from '../../images/Learning languages-cuate.png'

function About() {
  return (
    <>
    <div class="container" style={{ marginBottom: '53px', marginTop:'53px' }}>
  <div class="row gx-1 ">

    <div class="col-md-6">
    <div className="blockquote mb-0">
          <p style={{ textAlign: "justify",  marginTop:'150px' }}>
            Hi Everyone, I am <span className="purple">Abdurraouf Sadi </span>
            from <span className="purple"> Tripoli, Libya.</span>
            <br />Full Stack Web Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <div /> Playing Games
            </li>
            <li className="about-activity">
              <div /> Road Trips
            </li>
            <li className="about-activity">
              <div /> Travelling
            </li>
            <li className="about-activity">
              <div /> Fishing and Camping
            </li>
          </ul>

          
        
        </div>

    </div>

    <div class="col-md-6">
    <img
              src={aboutImage}
              alt="home pic"
              className="img-fluid"

            />
    </div>

  </div>
</div>

  </>
  );
}

export default About;
