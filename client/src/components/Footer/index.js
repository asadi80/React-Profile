import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className=' text-center text-white bottom' light bgColor='light'>
      <MDBContainer  className='p-4 pb-0'>
        <section className='mb-4'>
          
          <a className='btn btn-outline-dark btn-floating m-1' href='https://www.linkedin.com/in/abdurraouf-sadi/' target='blank'  role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='https://github.com/asadi80' target='blank' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright
      </div>
    </MDBFooter>
  );
}