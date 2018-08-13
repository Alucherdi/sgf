import React from 'react';
import './Gamership.scss'
import NavBar from '../NavBar/NavBar'
import Logo from './Assets/Logo.png'

import Facebook from './Assets/Facebook.png'
import Instagram from './Assets/Instagram.png'
import Twitter from './Assets/Twitter.png'
import Twitch from './Assets/Twitch.png'
import Youtube from './Assets/Youtube.png'
import Countdown, { zeroPad, getTimeDifference } from 'react-countdown-now';

class Gamership extends React.Component{

    constructor(){
        super();
        var today = new Date();
        var date =  new Date('1 Sep 2018');        
        this.state = {
            date: getTimeDifference(date, [{ now: today, precision: 0, controlled: false }])
        }
    }

    componentDidMount = () =>{
        var today = new Date();
        var date =  new Date('1 Sep 2018');
        setInterval(()=>{
            this.setState({
                date: getTimeDifference(date, [{ now: today, precision: 3, controlled: false }])
            })
        },0)
    }

    render(){
        var cd = this.state.date;
        return(
            <div className="gamership-main">
                <NavBar/>
                <div className="gamership-box">
                    <div className="gamership-date">
                        <div className="logo">
                            <img src={Logo} alt="" width={276.75*1.5} height={139.39*1.5}/>
                        </div>
                        <div className="date-box">
                            <div className="date-item">
                                <div className="sub">
                                    <span className="day">{cd.days}</span>
                                </div>
                                <div className="sub">
                                    <span className="day-name">Days</span>                                    
                                </div>
                            </div>
                            <div className="date-item">
                                <div className="sub">
                                    <span className="day">{cd.hours}</span>                                    
                                </div>
                                <div className="sub">
                                    <span className="day-name">Hours</span>                                    
                                </div>
                            </div>
                            <div className="date-item">
                                <div className="sub">
                                    <span className="day">{cd.minutes}</span>                                    
                                </div>
                                <div className="sub">
                                    <span className="day-name">Minutes</span>                                    
                                </div>
                            </div>
                            <div className="date-item">
                                <div className="sub">
                                    <span className="day">{cd.seconds}</span>                                    
                                </div>
                                <div className="sub">
                                    <span className="day-name">Seconds</span>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gamership-news">
                        <div className="news-div">
                            <div className="text">                            
                                <div className="title">
                                    <p>NEWSLETTER</p>
                                </div>
                                <div className="subtitle">
                                    <p>SUSCRÍBETE A NUESTRO NEWSLETTER,</p>
                                    <p>ENTÉRATE DE LAS ÚLTIMAS NOVEDADES</p>
                                </div>
                            </div>                            
                            <div className="form">
                                <form className="news-form">
                                    <input className="text" placeholder="Correo Electronico" type="text"/>
                                    <input className="button" type="submit"/>
                                </form>
                            </div>                            
                        </div>
                    </div>
                    <div className="gamership-follow">
                        <div className="wrapper">
                            <div className="text">
                                <p>FOLLOW US</p>
                            </div>
                            <div className="follow-box">
                                <div className="follow-item">
                                    <img src={Facebook} alt="" width={64}/>
                                </div>
                                <div className="follow-item">
                                    <img src={Instagram} alt="" width={64}/>
                                </div>
                                <div className="follow-item">
                                    <img src={Twitter} alt="" width={64}/>
                                </div>
                                <div className="follow-item">
                                    <img src={Twitch} alt="" width={64}/>
                                </div>
                                <div className="follow-item">
                                    <img src={Youtube} alt="" width={100}/>
                                </div>
                            </div>
                            <div className="footer">
                                <p>GAMERSHIP ALL RIGHTS RESERVED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamership;