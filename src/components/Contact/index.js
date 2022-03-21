import React, { useState } from "react";
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import contactImage from '../../images/Get in touch-cuate.png'

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:80/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <div class="container" style={{ marginBottom: '53px', marginTop:'53px' }}>
        <div class="row gx-1 ">
          <div class="col-md-6" style={{  marginTop:'153px' }}>
            <form onSubmit={handleSubmit}>
              <MDBInput id='name' wrapperClass='mb-4' label='Name' htmlFor="name" required />
              <MDBInput type='email' id='email' wrapperClass='mb-4' label='Email address' htmlFor="email" required />
              <MDBInput wrapperClass='mb-4' textarea id='message' rows={4} label='Message' htmlFor="message" required />
              <MDBBtn type='submit' className='mb-4' block>
                {status}
              </MDBBtn>
            </form>
          </div>

          <div class="col-md-6">
            <img
              src={contactImage}
              alt="home pic"
              className="img-fluid"

            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;