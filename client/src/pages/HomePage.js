import React from 'react'
import MainPage from './../components/Layout/MainPage';
import { useAuth } from '../context/auth';
import MyImage1 from "./img/features/f1.png"; 
import MyImage2 from "./img/features/f2.png"; 
import MyImage3 from "./img/features/f3.png"; 
import MyImage4 from "./img/features/f4.png"; 
import MyImage5 from "./img/features/f5.png";
import MyImage6 from "./img/features/f6.png";  

import myImagen1 from './img/products/n1.jpg'; 
import myImagen2 from './img/products/n2.jpg'; 
import myImagen3 from './img/products/n3.jpg'; 
import myImagen4 from './img/products/n4.jpg'; 
import myImagen5 from './img/products/n5.jpg'; 
import myImagen6 from './img/products/n6.jpg';
import myImagen7 from './img/products/n7.jpg';  
import myImagen8 from './img/products/n8.jpg'; 
const HomePage = () => {
  const [auth,setAuth]=useAuth();
  return (
    <MainPage title={"best offer"}>
      <section id="hero">
            <h4>Tread-in-offer</h4>
            <h2>Supper value deals</h2>
            <h1>on  all  products</h1>
            <p>Save more with coupns & up to 70% off!</p>
            <button>Shop Now</button>
        </section>
       <section id="feature" className="section-p1">
  <div className="fe-box">
    <img src={MyImage1} alt />
    <h6>Free Shipping</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage2}alt />
    <h6>online order</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage3} alt />
    <h6>Save Mony</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage4} alt />
    <h6>Promotion</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage5}alt />
    <h6>Happy sell</h6>
  </div>
  <div className="fe-box">
    <img src={MyImage6} alt />
    <h6>Support</h6>
  </div>
        </section>

        <section id="banner" class="section-m1">
            <h4>Repair Services</h4>
            <h2>Up to <span>70% off</span> All t-shirts & Accessories</h2>
            <button class="normal">Explore more</button>
        </section>

       <section id="product1" className="section-p1">
  <h2>New Arrivals</h2>
  <p>summer Collection New Morden Design </p>
  <div className="pro-container">
    <div className="pro">
      <img src={myImagen1} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen2} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen3} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen3} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen4}alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen6} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen7} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
    <div className="pro">
      <img src={myImagen8} alt />
      <div className="des">
        <span>adidas</span> 
        <h5>Cartoon Astronaut T-shirts</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
        <a href="#"><i className="fal fa-shopping-cart" /></a>
      </div>
    </div>
  </div>
</section>


       <section id="sm-banner" className="section-p1">
  <div className="banner-box">
    <h4>crazy deals</h4>
    <h2>buy 1 get 1 free</h2>
    <span>the best classic dress in on sale at cara</span>
    <button className="white">Learn more</button>
  </div>
  <div className="banner-box banner-box2">
    <h4>Spring/summer</h4>
    <h2>upcomming season</h2>
    <span>the best classic dress in on sale at cara</span>
    <button className="white">Collection</button>
  </div>
          </section>

         <section id="banner3">
  <div className="banner-box">
    <h2>SEASONAL SALE</h2>
    <h3>Winter Collection -50% OFF</h3>
  </div>
  <div className="banner-box banner-box2">
    <h2>NEW FOOTWEAR COLLECTION</h2>
    <h3>spring / summer 2023</h3>
  </div>
  <div className="banner-box banner-box3">
    <h2>T-SHIRT</h2>
    <h3>New Trendy Prints</h3>
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





    </MainPage>
  )
}

export default HomePage
