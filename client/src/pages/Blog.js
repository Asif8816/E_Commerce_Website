import React from 'react'
import MainPage from '../components/Layout/MainPage';

import MyImageb1 from "./img/blog/b1.jpg"; 
import MyImageb2 from "./img/blog/b2.jpg"; 
import MyImageb3 from "./img/blog/b3.jpg"; 
import MyImageb4 from "./img/blog/b4.jpg"; 
import MyImageb5 from "./img/blog/b5.jpg"; 






const Blog = () => {
  return (
    <MainPage title={"Blog"}>
      <div>
      <section id="page-header" className="blog-header">
  <h2>
    #readmore
  </h2>
  <p>
    Read all case studies about our products
  </p>
         </section>

        <section id="blog">
  <div className="blog-box">
    <div className="blog-img">
      <img src={MyImageb1} alt />
    </div>
    <div className="blog-details">
      <h4>The Cotton-jersey Zip-Up Hoodies</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum inventore eligendi consectetur deleniti
        assumenda, excepturi necessitatibus adipisci iure reiciendis dicta quod molestias odit esse blanditiis maxime
        incidunt placeat debitis, sequi voluptate molestiae! Exercitationem, non dolores! Porro vitae nihil temporibus!</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>13/01</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={MyImageb2} alt />
    </div>
    <div className="blog-details">
      <h4>The Cotton-jersey Zip-Up Hoodies</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum inventore eligendi consectetur deleniti
        assumenda, excepturi necessitatibus adipisci iure reiciendis dicta quod molestias odit esse blanditiis maxime
        incidunt placeat debitis, sequi voluptate molestiae! Exercitationem, non dolores! Porro vitae nihil temporibus!</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>14/01</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={MyImageb3} alt />
    </div>
    <div className="blog-details">
      <h4>The Cotton-jersey Zip-Up Hoodies</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum inventore eligendi consectetur deleniti
        assumenda, excepturi necessitatibus adipisci iure reiciendis dicta quod molestias odit esse blanditiis maxime
        incidunt placeat debitis, sequi voluptate molestiae! Exercitationem, non dolores! Porro vitae nihil temporibus!</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>17/01</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={MyImageb4}alt />
    </div>
    <div className="blog-details">
      <h4>The Cotton-jersey Zip-Up Hoodies</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum inventore eligendi consectetur deleniti
        assumenda, excepturi necessitatibus adipisci iure reiciendis dicta quod molestias odit esse blanditiis maxime
        incidunt placeat debitis, sequi voluptate molestiae! Exercitationem, non dolores! Porro vitae nihil temporibus!</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>21/01</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={MyImageb5} alt />
    </div>
    <div className="blog-details">
      <h4>The Cotton-jersey Zip-Up Hoodies</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum inventore eligendi consectetur deleniti
        assumenda, excepturi necessitatibus adipisci iure reiciendis dicta quod molestias odit esse blanditiis maxime
        incidunt placeat debitis, sequi voluptate molestiae! Exercitationem, non dolores! Porro vitae nihil temporibus!</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>22/01</h1>
  </div>
         </section>
        
        <div>
  <section id="pagination" className="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>

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

export default Blog
