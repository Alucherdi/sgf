import React from 'react';
import './BuyGamership.scss'

class GamershipPlaneInfo extends React.Component{

    render(){
        var textColor = {
            color: this.props.checked ? '#FFFFFF' : '#909090'
        }
        return(
            <React.Fragment>
                <div className="buy-box">
                    <div className="buy-plane" onClick={this.props.onClick} style={{
                        border: this.props.checked ? '4px solid #D59E16' : '4px solid rgb(214, 212, 212)',
                        background: this.props.checked ? '#E0B650' : '#FFFFFF',
                        'box-shadow': this.props.checked ? '0px 0px 35px -2px rgba(231,166,26,1)' : ''
                    }}>
                        <div className="buy-month">
                            <span className="monthText" style={textColor}>{this.props.months}
                                <span className="monthTitle">{this.props.prefix}</span>
                            </span>                                
                        </div>
                        <div className="buy-price" style={{
                                'border-top': this.props.checked ? '4px solid #D59E16' : '4px solid rgb(214, 212, 212)',
                                color: this.props.checked ? '#FFFFFF' : '#909090'
                            }}>
                            <span className="price">{this.props.price}</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default GamershipPlaneInfo