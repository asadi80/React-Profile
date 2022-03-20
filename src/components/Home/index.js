import React from 'react';
import homeImage from '../../images/Progresive app-amico.png'

function Home() {
    return (
        <>
            <div class="container" >
  <div class="row gx-1 justify-content-around" style={{ marginBottom: '53px', marginTop:'53px' }} >

    <div class="col-md-6" >
    <h1 style={{ paddingBottom: 15 ,marginTop: '200px'}} className="heading" >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name" >
                I'M
                <strong className="main-name" style={{textAlign:'center'}}> Abdurraouf Sadi</strong>
                <br></br>
                <strong className="main-name" style={{textAlign:'center'}}> Welcome To My Protfolio</strong>
              </h1>

    </div>

    <div class="col-md-6">
    <img
                src={homeImage}
                alt="home pic"
                className="img-fluid"
               
              />
    </div>

  </div>
</div>
            
        </>
    );
}

export default Home;
