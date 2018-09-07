import React from 'react';
import CardReactFormContainer from 'card-react';
import './BuyGamership.scss'
import NavBar from '../NavBar/NavBar'
import GamershipPlaneInfo from './GamershipPlaneInfo';

class BuyGamership extends React.Component{

    constructor(){
        super();
        this.state = {
            current: 1,
            info:{
                '0': {
                    title: 'Gamership (1 Mes)',
                    features: ["Pase Anual","Pase Anual","Pase Anual"]
                },
                '1': {
                    title: 'Gamership (3 meses)',
                    features: ["Pase Anual","Pase Anual","Pase Anual","Pase Anual"]
                },
                '2': {
                    title: 'Gamership Anual (12 meses)',
                    features: ["Pase Anual","Pase Anual","Pase Anual","Pase Anual","Pase Anual"]
                }
            }
        }
    }

    render(){
        var entry = this.state.info[this.state.current].features.map((key,index) =>{
            return <li key={index}>{key}</li>;
        })
        return(
            <div>
                <NavBar/>
                <div className="buy-container">
                    <div className="buy-gamership">
                        <div className="buy-title">
                            <span className="title">Elige el plazo de Gamership que mas te convenga!</span>
                        </div>
                        <div className="buy-main">
                            <GamershipPlaneInfo
                                months="1"
                                prefix="Mes"
                                price="$59.99"
                                checked={this.state.current === 0}
                                onClick={() => this.setState({current: 0})}
                            />
                            <GamershipPlaneInfo
                                months="3"
                                prefix="Meses"
                                price="$179.97"
                                checked={this.state.current === 1}
                                onClick={() => this.setState({current: 1})}
                            />
                            <GamershipPlaneInfo
                                months="12"
                                prefix="Meses"
                                price="$597.50"
                                checked={this.state.current === 2}
                                onClick={() => this.setState({current: 2})}
                            />
                        </div>
                    </div>
                    <div className="buy-info">
                        <span className="title">{this.state.info[this.state.current].title}</span>
                        <div className="features">
                            <ul className="feature-list">
                                {entry}
                            </ul>                            
                        </div>
                        <button className="pay">Proceder al pago</button>                     
                    </div>
                </div>
            </div>            
        )
    }
}

export default BuyGamership