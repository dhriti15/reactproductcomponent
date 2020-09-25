import React from 'react';
import pic from "./image_bene.jpeg"
import './App.css';



export default function App() {
  return (
   <>
     <div class="card">
    <img  src={pic} class="image" alt="Avatar" ></img>
    <div class="card2">
    <p><span class="heading">CBD Isolate 300 mg</span><br/><span class="cbd">The purest form of CBD for your body</span></p>
    <hr/>
    <p class="cbd"> Formulated with Premium CBD Isolate to give your body CBD in it's purest form</p>
    <p><span class="cbd2" >What is it?</span><br/><span class="cbd">Most people new to CBD do best with a 300 mg Isolate oil. Becouse you can start<br/> drop by drop </span></p>
    <p><span class="cbd2">All Ingredients</span><br/><span class="cbd"> 99%  Pure broad-spectrum CBD Isolate Natural(No added flavor). </span></p>
    <div class="subscribe">
    <p><span class="cbd"><del>$29.99</del></span><br/><span class="cbd3"><span  >$26.99</span><span class="cbd3">|</span><span><span class="cbd3">-</span><span class="cbd5">1</span><span class="cbd3">+</span></span></span></p>
    <p class="save">Subscribe & save 10%<br/><span class="cbd4">
    <button class="monts"> 3Months<img src="https://img.icons8.com/material-rounded/24/000000/expand-arrow.png"/></button></span></p>
    </div>
    <div>
     <button class="w3-button w3-black w3-large w3-round">Add to cart</button>
    </div>
    </div>
    </div>
   </>
  )
};