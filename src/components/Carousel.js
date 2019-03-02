import React, { Component } from 'react';
import './Slide.css';
import Dots from './Dots';
import rightArrow from '../img/slider-left-arrow.svg';
import leftArrow from '../img/slider-right-arrow.svg';
let slideIndex = 0;
let timeInterval;
let autoPlay = false;

class Carousel extends Component {

    componentDidMount() {
        autoPlay = this.props.autoplay;
        this.showSlides();
    }
    handleDotClick = (index) => {
        if (this.props.isDotWork) {
            slideIndex = index;
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
    nextSlide = () => {
        if (this.props.isArrowWork) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
    prevSlide = () => {
        if (this.props.isArrowWork) {
            let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex--;
        if (slideIndex === 0) { slideIndex = slides.length }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        }
    }

    showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        if (autoPlay)
            setInterval(this.showSlides, timeInterval);
    }

    render() {
        timeInterval = this.props.intervalTime;
        //console.log(this.props.autoplay)
        return (
            <div>
                {
                    this.props.images.map((image, i) => (
                        <div key={i}>
                            <div className="slideshow-container">
                                <div className="mySlides fade">
                                    <img src={image.imgPath} style={{ width: "90%" }}></img>
                                    <div className="text">{image.text}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div>
                    <Dots image={this.props.images} dotClick={this.handleDotClick} index={slideIndex} />
                </div>
                <div className='right-arrow' onClick={this.prevSlide}>
                    <img width="50px" height="50px" src={rightArrow} />
                </div>
                <div className='left-arrow' onClick={this.nextSlide}>
                    <img width="50px" height="50px" src={leftArrow} />
                </div>
            </div>
        );
    }
}

export default Carousel;