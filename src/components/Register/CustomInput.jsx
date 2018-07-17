import React from 'react';
import "./CustomInput.scss"

class CustomInput extends React.Component{
    render(){
        if(this.props.error != null){                
            return(
                <div className="CustomInput" id={this.props.id}>
                    <input {...this.props} id={"CustomInput-input-"+Math.random()} onChange={this.props.onChange} required/>                    
                    <span className="span-error">{"\n"+this.props.error}</span>
                </div>
            )
        }else{
            return(
                <div className="CustomInput">
                    <input {...this.props}/>
                </div>
            )
        }
    }
}

export default CustomInput;