import React from "react"
import "./Register-Alt.scss"
import Logo from "../../NavBar/assets";

class RegisterAlt extends React.Component {

	render() {
		return (
            <div>
                <div className="logo">                    
                    <img alt="" src={Logo}/>
                </div>
            </div>
        );
	}
}

export default RegisterAlt