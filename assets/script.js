"use strict";

//! ******************** CONSTANTS ******************** //

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const right  = document.querySelector(".arrow_right");
const left   = document.querySelector(".arrow_left");
const dots   = document.querySelector(".dots");
const img    = document.querySelector(".banner-img");
const text   = document.querySelector("#banner p");

const LENGTH = slides.length;

//! ******************** VARIABLES ******************** //

let index = 0;

//! ******************** FUNCTIONS ******************** //

/**
 * Updates the slide to display the image and tagline corresponding to the given index.
 **/
const changeSlide = (i) => {
  const allDots = dots.children;

  img.src        = `./assets/images/slideshow/${slides[i].image}`;
  text.innerHTML = slides[i].tagLine;

  for (let i = 0; i < LENGTH; i++) {
    allDots[i].classList.toggle("dot_selected", i === index);
  }
  index = i;
}

/**
 * Moves the index to the previous slide in a circular manner.
 **/
const slideLeft = () => {
  index = (index + LENGTH - 1) % LENGTH;
  changeSlide(index);
}

/**
 * Moves the index to the next slide in a circular manner.
 **/
const slideRight = () => {
  index = (index + 1) % LENGTH;
  changeSlide(index);
}

/**
 * Adds event listeners to the right and left arrow elements for the slideRight and slideLeft functions.
 */
const addListeners = () => {
  right.addEventListener("click", slideRight);
  left.addEventListener("click", slideLeft);
}

/**
 * Fills the dots container with four dot elements and adds the "dot_selected" class to the first dot.
 **/
const addDots = () => {
  for (let i = 0; i < LENGTH; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => { switchSlide(i) });
    if (i === index) dot.classList.add("dot_selected");
    dots.appendChild(dot);
  }
}

//! ******************** MAIN ******************** //

console.log("right : ", typeof right, right);
console.log("left : ", typeof left, left);

addDots();
addListeners();
