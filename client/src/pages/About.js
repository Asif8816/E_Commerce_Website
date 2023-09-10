import React from 'react'
import MainPage from './../components/Layout/MainPage';

import MyImage1 from "./img/features/f1.png"; 
import MyImage2 from "./img/features/f2.png"; 
import MyImage3 from "./img/features/f3.png"; 
import MyImage4 from "./img/features/f4.png"; 
import MyImage5 from "./img/features/f5.png";
import MyImage6 from "./img/features/f6.png";  

const About = () => {
  return (
    <MainPage title={"About us - Ecommer app"}>
      <div>
      <section id="page-header" className="about-header">
  <h2>
    #KnowUs
  </h2>
  <p>
    Lorem  ipusm dolor sit amet , consectetur
  </p>
        </section>

    <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>

     <section id="feature" className="section-p1">
  <div className="fe-box">
    <img src={MyImage1} alt />
    <h6>Free Shipping</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage2} alt />
    <h6>online order</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage3}alt />
    <h6>Save Mony</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage4}alt />
    <h6>Promotion</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage5} alt />
    <h6>Happy sell</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage6} alt />
    <h6>Support</h6>
  </div>
</section>

      </div>
    </MainPage>
  )
}

export default About
