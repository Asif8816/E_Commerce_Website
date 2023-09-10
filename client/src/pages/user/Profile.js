import React from 'react'
import MainPage from '../../components/Layout/MainPage'
import UserManu from '../../components/Layout/UserManu';
import myImage1 from './img/products/f1.jpg'; 
import myImage2 from './img/products/f2.jpg'; 
import myImage3 from './img/products/f3.jpg'; 
import myImage4 from './img/products/f4.jpg'; 
import myImage5 from './img/products/f5.jpg';
import myImagen1 from './img/products/n1.jpg'; 
import myImagen2 from './img/products/n2.jpg'; 
import myImagen3 from './img/products/n3.jpg'; 
import myImagen4 from './img/products/n4.jpg'; 


const Profile = () => {
  

  return (
    <MainPage>
    <div className="container-fluid p-3 m-3">
    <div>
  <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
      <img  src={myImage1} width="100%" alt id="MainImg" />
      <div className="small-img-group">
        <div className="small-img-col">
          <img  src={myImage1} alt width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img src={myImage2} alt width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img  src={myImage3} alt width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img  src={myImage4} alt width="100%" className="small-img" />
        </div>
      </div>
    </div>
    <div className="singal-pro-details">
      <h6>Home / T-Shirt</h6>
      <h4>Men's Fashinon T Shirt </h4>
      <h2>$139.00</h2>
      <select>
        <option>Select Size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
      </select>
      <input type="number" defaultValue={1} />
      <button className="normal">Add To Cart</button>
      <h4>Product Details</h4>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime dolorum quo inventore velit perferendis
        nisi, eos, corporis natus repudiandae, minima eveniet molestias excepturi optio fugit necessitatibus vitae in
        officia! Itaque repellendus nesciunt commodi alias rerum veritatis earum eveniet fugiat Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque unde ab maxime laboriosam! Sit ab est recusandae quibusdam porro doloribus, officia
        repellendus minima qui voluptates et sequi impedit perspiciatis delectus alias rerum ex! Voluptas voluptatem, maxime
        esse modi omnis quos!</span>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
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
        <img src={myImagen3}alt />
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
        <img src={myImagen4} alt />
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

    </div>

    </MainPage>
  )
}

export default Profile
