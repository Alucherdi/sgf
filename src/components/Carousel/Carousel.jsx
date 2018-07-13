import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Carousel.scss';
import b1 from './Assets/Banner-Test.png';
import b2 from './Assets/Banner-Test2.png';

class Carousel extends React.Component{

    render() {
        return (
            <React.Fragment>
                <OwlCarousel className="owl-theme" loop margin={1} items={1} autoplay={true}>
                    <div class="item size">
                        <img src={b1} alt="" width={600}/>
                    </div>
                    <div class="item size">
                        <img src={b2} alt="" width={720}/>
                    </div>
                    <div class="item size">
                        <img src={b1} alt="" width={720}/>
                    </div>
                    <div class="item size">
                        <img src={b2} alt="" width={720}/>
                    </div>
                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default Carousel;