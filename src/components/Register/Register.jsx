import React, { Component } from 'react'
import './Register.scss';
import 'react-datepicker/dist/react-datepicker.css'

class Register extends Component {    

    render(){
        return(
            <div className="register cwa">
                <form className="content cwa">
                    <div className="logo">                          
                        <img alt="" src="https://i.imgur.com/iGzlyPd.png" width="256"/>
                        <p><b>Crear una cuenta de Space Gaming</b></p>
                    </div>
                    <br/>
                    <label className="label-input" for="email">Correo electronico</label>
                    <input type="text" placeholder="Correo electronico" name="email" required/>

                    <label className="label-input" for="email-repeat">Confirmar correo electronico</label>
                    <input type="text" placeholder="Confirmar correo electronico" name="email-repeat" required/>

                    <label className="label-input" for="psw">Contraseña</label>
                    <input type="password" placeholder="Contraseña" name="psw" required/>

                    <label className="label-input" for="nick">Nombre de Usuario</label>
                    <input type="text" placeholder="Nombre de Usuario" name="nick" required/>

                    <label className="label-input" for="date">Fecha de Nacimiento</label>
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