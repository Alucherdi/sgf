import React from 'react';
import NavBar from '../NavBar/NavBar';
import './NewsTemp.scss'
import { Context, Provider } from '../Context/Storage';
import ad from './Assets/Ad-Test.png';
import ad2 from './Assets/Ad-Test2.png';
import Loading from "../Assets/Loading.svg";
import $ from 'jquery';

class News extends React.Component{

    constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
    }
    
    componentDidMount = () =>{
        $(() =>{
            setTimeout(() =>{
                this.setState({
                    loading: false
                })
            }, 2000)
        });
    }

    render(){        
        return(
            <React.Fragment>
                <NavBar/>
                <Provider>				    
				    <Context.Consumer>
					{context =>{							
                        var sort = context.data.sort(function(a, b) {
                            a = new Date(a.date);
                            b = new Date(b.date);
                            return a>b ? -1 : a<b ? 1 : 0;
                        })
                        var entry = sort.map((key,index) =>{
                            var obj = JSON.parse(key.content);
                            var date = new Date(key.date).toLocaleDateString('es-ES',{
								month: 'long',
								day: 'numeric'
							})
                            return(
                                <div className="child" key={index}>
                                    <a href={`/post/${key.id}`}>
                                        <div className="nb">
                                            <img alt="" src={obj.banner}/>
                                        </div>
                                        <p className="ndate">{date}</p>
                                        <h2>{obj.title}</h2>
                                        <p className="title">{"Por "+obj.author}</p>
                                    </a>                                    
                                </div>
                            )
                        })
                        if(this.state.loading){
							return (
								<div className="bgstar">
									<div id='stars'/>
									<div id='stars2'/>
									<div id='stars3'/>
									<div className="loading">
										<img className="centered" alt="" src={Loading} width="150"/>
									</div>
								</div>
							);
						}else{
							return(
                                <div className="main-news">
                                    <div className="wrapper">
                                        <div className="news-flex">
                                            <div className="news-box">
                                                {entry}
                                                {entry}
                                                {entry}
                                                {entry}
                                                {entry}
                                                {entry}
                                                {entry}
                                            </div>                                    
                                        </div>
                                        <div className="ads-flex">
                                            <div className="ads">
                                                <img src={ad} alt=""/>
                                                <img src={ad2} alt=""/>
                                                <img src={ad} alt=""/>
                                                <img src={ad2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )	
						}	                        
					}}
				    </Context.Consumer>
			    </Provider>
            </React.Fragment>
        )
    }
}

export default News;