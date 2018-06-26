import React from "react";
import Slider from "react-slick";
import './AdsSlider.scss'

class AdsSlider extends React.Component {

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 12,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      draggable: false,
      pauseOnHover: true,
      className: "slider"
    };
    return (
      <Slider {...settings}>
        <div>
          <img alt="" src="https://download.zoho.com/v1/docs/prv/6n43obb17e4a809c04e4ca51317e4a28c6581?_t=1529959156423"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default AdsSlider;