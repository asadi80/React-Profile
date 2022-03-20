import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import projects from '../../projects.json'



function Projects() {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="row justify-content-center">Projects</h2>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className="container py-5 h-100 mb-3" >
                <div className="row justify-content-center">
                    <div className="col-12">
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            {projects.map((project) => (
                                <div className="card-container">
                                    <div className="card" >
                                        <div className="front">
                                            <div className="cover">
                                                <MDBCardImage
                                                    src={project.image}
                                                    alt='...'
                                                    position='top'
                                                />
                                            </div>

                                            <div className="content">
                                                <div class="main">
                                                    <h3 class="name">{project.name}</h3>

                                                </div>
                                                <div class="footer">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="header">

                                            </div>
                                            <div className="content">
                                                <div className="main">
                                                    <h4 className="text-center">Description</h4>
                                                    <p className="text-center">{project.description}</p>

                                                    <div className="stats-container">

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="footer">
                                                <div class="social-links text-center">
                                                    <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href={project.github} target="_blank">
                                                        <MDBIcon fab icon='github' />
                                                    </MDBBtn>
                                                    <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href={project.online} target="_blank">
                                                        <MDBIcon fab icon='dribbble' />
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </MDBRow>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
