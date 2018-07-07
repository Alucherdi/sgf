import React, { Component } from 'react'
import './Register.scss';
import 'react-datepicker/dist/react-datepicker.css'
import Logo from '../Assets/Logo-Alt.svg'
import ReactPasswordStrength from 'react-password-strength';

class Register extends Component {    

    constructor(){
        super();
        this.state = { 
            passLength: 0,
            password: ""
        }
    }

    changeCallback = () => {
        this.setState({ passLength: this.state.password.length },()=>{
            console.log(this.state.passLength)
        })
    }     
    
    catchInfo = (e) => {
		var el = e.currentTarget
		var refNum = Number(el.parentElement.getAttribute("ref-num"))
		console.log(el)
	}

    render(){
        return(
            <div className="register cwa">
                <form className="content cwa">
                    <div className="logo">                          
                        <img alt="" src={Logo} width="256"/>
                        <p><b>Crear una cuenta de Space Gaming</b></p>
                    </div>
                    <br/>
                    <input type="text" placeholder="Nombre de Usuario" name="nick" required/>

                    <input type="text" placeholder="Correo electronico" name="email" required/>

                    <input type="text" placeholder="Confirmar correo electronico" name="email-repeat" required/>
             
                    <ReactPasswordStrength
                        className="strength"
                        minLength={5}
                        minScore={2}
                        tooShortWord="Muy Corta"
                        scoreWords={['Debil', 'Normal', 'Buena', 'Fuerte']}
                        inputProps={{ type:"password", placeholder:"Contraseña", name:"psw", onKeyPress:this.catchInfo, required:true}}
                        changeCallback={this.changeCallback}
                    />
                    <input id="date" type="date" name="date"/>
                    <div className="Terms">
                        <input type="checkbox" name="terms" value="terms" required/><label>Acepto los <b>Terminos de Uso, Terminos de Venta</b> y la <b>Politica de Privacidad</b></label>
                        <br/>                        
                        <input type="checkbox" name="third" value="third"/><label><b>Compartir mis datos con terceros asociados</b></label>
                    </div>
                    <br/>
                    <button type="submit" className="rbtn"><b>Crear una cuenta de Space Gaming</b></button>
                </form>
            </div>
        );
    }
}

export default Register;