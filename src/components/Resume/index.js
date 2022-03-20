import React from 'react';
import resumeImage from '../../images/Abdurraouf Sadi.png'
import cv from '../../images/Abdurraouf Sadi.pdf'


function Resume() {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="row justify-content-center">Resume</h2>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className="container py-5 h-100 mb-3" >
                <div className="row justify-content-center">
                    <div className="col-12">
                    <a class="btn btn-primary" style={{backgroundColor: '#55acee'}} href={cv} target="_blank" role="button" rel="noreferrer">
  
                    Download Resume
</a>
                    <img
              src={resumeImage}
              alt="home pic"
              className="img-fluid"

            />

                     
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Resume;
