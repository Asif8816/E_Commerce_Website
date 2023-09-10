import React from 'react'
import MainPage from './../components/Layout/MainPage';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import MyImagec1 from "./img/people/1.png"; 
import MyImagec2 from "./img/people/2.png";
import MyImagec3 from "./img/people/3.png"; 



const Contact = () => {
  return (
    <MainPage title={"Contact us"}>
      <div>
       <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>

      <section id="contact-details" className="section-p1">
  <div className="details">
    <span>GET IN TOUCH</span>
    <h2>Visit one of our agency location or contact us today</h2>
    <h3>Head Office </h3>
    <div>
      <li>
        <i className="fal fa-map" />
        <p>56 glassford Street Glasgow G1 1UL New York</p>
      </li>
      <li>
        <i className="far fa-envelope" />
        <p>56 glassford Street Glasgow G1 1UL New York</p>
      </li>
      <li>
        <i className="fas fa-phone-alt" />
        <p>contact@example.com </p>
      </li>
      <li>
        <i className="far fa-clock" />
        <p>Monday to Saturday :9.00pm to 16.pm</p>
      </li>
    </div>
  </div>
  <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8089830230138!2d-1.2543668000000001!3d51.754816399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2z4KSG4KSV4KWN4KS44KSr4KWL4KSw4KWN4KShIOCkteCkv-CktuCljeCkteCkteCkv-CkpuCljeCkr-CkvuCksuCkrw!5e0!3m2!1shi!2sin!4v1687146549216!5m2!1shi!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
      </section>

     <section id="form-details">
  <form action>
    <span>LEAVE A MESSAGE </span>
    <h2>We love to here from you</h2>
    <input type="text" placeholder="Your Naame" />
    <input type="text" placeholder="E-mail" />
    <input type="text" placeholder="Subject" />
    <textarea name id cols={30} rows={10} placeholder="Your MESSAGE" defaultValue={""} />
    <button className="normal">Submit</button>
  </form>
  <div className="logo">
    <div className="people">
      <img src={MyImagec1} alt />
      <p /><h3>John Done</h3><br /> Senior Marketing Manger <br /> Phone:+000 123 77 55 <br /> Email:contact@example.com<p />
    </div>
    <div className="people">
      <img src={MyImagec2}alt />
      <p /><h3>willim son</h3> <br />Senior Marketing Manger <br /> Phone:+000 123 77 55 <br /> Email:contact@example.com<p />
    </div>
    <div className="people">
      <img src={MyImagec3} alt />
      <p /><h3>annu kily</h3> <br /> Senior Marketing Manger <br /> Phone:+000 123 77 55 <br /> Email:contact@example.com<p />
    </div>
  </div>
     </section>

     <section id="newsletter" className="section-p1 section-m1">
  <div className="newstext">
    <h4>Sign Up for Newsletters</h4>
    <p>Get E-mail update about our latest shop and <span>spacial offers </span></p>
  </div>
  <div className="form">
    <input type="text " placeholder="Your enail address" />
    <button className="normal">Sign Up</button>
  </div>
       </section>





      </div>
    </MainPage>
  )
}

export default Contact
