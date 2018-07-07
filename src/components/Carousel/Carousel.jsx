import React from 'react';
import './Carousel.scss'
import Test from './Assets/Banner-Test.png';
import Test2 from './Assets/Banner-Test2.png';
class Carousel extends React.Component{

    constructor(){
        super();
        this.state = {
            m: 1,
            automaticSlide: undefined
        }
    }

    componentDidMount(){
        var slider = document.querySelector(".slider")
		var slides = document.getElementsByClassName("slide")				
        this.setState({
            automaticSlide: setInterval(() => {
                slider.scrollLeft = slides[this.state.m].offsetLeft
                this.setState({
                    m: (this.state.m + 1) > slides.length - 1 ? 0 : (this.state.m + 1)
                })
            }, 3000)
        })        
    }

    moveSlides = (e) =>{        
        e.preventDefault();        
        var slider = document.querySelector(".slider")
		var slides = document.getElementsByClassName("slide")	        
        var direction = e.currentTarget.getAttribute('value');
        clearInterval(this.state.automaticSlide)
        switch (direction) {
            case "left":
                this.setState({
                    m: this.state.m - 1 < 0 ? slides.length - 1 : this.state.m - 1
                })
                break
            case "right":
                this.setState({
                    m: this.state.m + 1 > slides.length - 1 ? 0 : this.state.m + 1
                })
                break
            default:
                break
        }
        slider.scrollLeft =  slides[this.state.m].offsetLeft;
    }

    render(){
        return(
            <div className="main">
                <div className="slider">
		            <div className="slide" id="slide1"><img src={Test} alt="" width="720" height="200"/></div>
		            <div className="slide" id="slide2"><img src={Test2} alt="" width="720" height="200"/></div>
                </div>	         
                <div className="slideButtons">
                    <span value="left" onClick={this.moveSlides}><p>{"‹"}</p></span>
		            <span value="right" onClick={this.moveSlides}><p>{"›"}</p></span>
	            </div>
            </div>
        )
    }
}

export default Carousel;