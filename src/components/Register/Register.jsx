import React, { Component } from 'react'
import './Register.scss';
import 'react-datepicker/dist/react-datepicker.css'
import Logo from '../Assets/Logo-Alt.svg'
import 'react-datepicker/dist/react-datepicker.css'
import CustomInput from './CustomInput';
import properties from "../Properties"

class Register extends Component {    

    constructor(){
        super();
        this.state = {
            name: "",
            nick: "",
            email: "",
            password: "",
            repeat: "",
            terms: false,
            validEmail: false,
            validPassword: false,
            validNick: false,
            validName: false
        }
    }

    changeCallback = () => {
        this.setState({ passLength: this.state.password.length },()=>{
            console.log(this.state.passLength)
        })
    }     
    
    validateEmail=(email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendRegister = (e) =>{
        e.preventDefault();
        var name = document.getElementById("name");
        var nick = document.getElementById("nick");
        var email = document.getElementById("email");
        var repeat = document.getElementById("email-repeat");
        var pass = document.getElementById("password");
        var terms = document.getElementById("terms");

        nick.children[1].style.display = this.state.validNick ? "none" : "initial";
        repeat.children[1].style.display = this.state.validEmail ? "none" : "initial";
        pass.children[1].style.display = this.state.validPassword ? "none" : "initial";
        name.children[1].style.display = this.state.validName ? "none" : "initial";
        terms.style.color = this.state.terms ? "rgb(36, 36, 36)" : "red";

        if((this.state.validEmail) && (this.state.validNick) && (this.state.validPassword) && (this.state.validName) && (this.state.terms)){
            var params = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    name: this.state.name,
                    username: this.state.nick,
                    email: this.state.email, 
                    password: this.state.password,
                    address: ""
                })
            }
            
            fetch(properties.services.register, params).then(r => r.json()).then(data => {
                switch(data.code){
                    case 200:
                        document.location.href = "/"
                        break;
                    case 500:
                        document.location.href = "/"
                        break;
                    case 240:
                        email.children[0].style.border = "1.5px solid red";
                        email.children[1].style.display = "initial";
                        break;
                    default:
                }
            })
        }
    } 
    
    emailValidator = (e) =>{
        if(e.target !== undefined){
            if(e.target.value.trim() === ""){
                e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
            }else{
                if(!this.validateEmail(e.target.value.trim())){                 
                    e.target.style.border = "1.5px solid red"
                }else{
                    e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"                    
                    this.setState({
                        validEmail: true,
                        email: e.target.value.trim().toLowerCase()
                    })
                }
            }            
        }        
    }

    repeatValidator = (e) =>{
        if(e.target !== undefined){
            if(e.target.value.trim() === ""){
                e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
            }else{
                if(this.state.email !== e.target.value.trim()){                 
                    e.target.style.border = "1.5px solid red"
                    this.setState({
                        validEmail: false
                    })
                }else{
                    e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"                    
                    this.setState({
                        validEmail: true,
                        repeat: e.target.value.trim().toLowerCase()
                    })
                }
            }            
        }        
    }

    nickValidator = (e) =>{
        if(e.target !== undefined){
            if(e.target.value.trim() === ""){
                e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
            }else{
                if(e.target.value.length > 3){
                    this.setState({
                        validNick: true,
                        nick: e.target.value.trim()
                    })
                    e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
                }else{
                    this.setState({
                        validNick: false
                    })
                    e.target.style.border = "1.5px solid red"
                }
            }            
        }        
    }    

    passValidator = (e) =>{
        if(e.target !== undefined){
            if(e.target.value.trim() === ""){
                e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
            }else{
                if(e.target.value.length > 7){
                    this.setState({
                        password: e.target.value.trim(),
                        validPassword: true
                    })
                    e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
                }else{
                    e.target.style.border = "1.5px solid red"
                    this.setState({
                        validPassword: false
                    })
                }
            }            
        }        
    }
    
    termsValidator = (e) =>{
        if(e.target !== undefined){
            this.setState({
                terms: e.target.checked
            })
        } 
    }

    nameValidator = (e) =>{
        if(e.target !== undefined){
            if(e.target.value.trim() === ""){
                e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
            }else{
                if(e.target.value.length > 10){
                    this.setState({
                        name: e.target.value,
                        validName: true
                    })
                    e.target.style.border = "1.5px solid rgba(0, 0, 0, 0.336)"
                }else{
                    e.target.style.border = "1.5px solid red"
                    this.setState({
                        validName: false
                    })
                }
            }            
        }        
    }

    render(){
        return(
            <div className="register cwa">
                <div className="content cwa">
                    <div className="logo">                          
                        <img alt="" src={Logo} width="256"/>
                        <p><b>Crear una cuenta de Space Gaming</b></p>
                    </div>
                    <br/>
                    <CustomInput error="Utiliza un nombre valido" type="text" placeholder="Nombre Completo" id="name" onChange={this.nameValidator}/>
                    <CustomInput error="Minimo 3 caracteres" type="text" placeholder="Nombre de Usuario" id="nick" onChange={this.nickValidator}/>
                    <CustomInput error="Este email ya esta en uso" id="email" type="text" placeholder="Correo electronico" onChange={this.emailValidator}/>
                    <CustomInput error="Estas direcciones de correo electrónico no coinciden." type="text" placeholder="Confirmar correo electronico" id="email-repeat" onChange={this.repeatValidator}/>
                    <CustomInput error="Minimo 8 caracteres" type="password" placeholder="Contraseña" id="password" onChange={this.passValidator}/>                                 

                    <div className="Terms">
                        <input type="checkbox" onChange={this.termsValidator}/><label id="terms">Acepto los <b>Terminos de Uso, Terminos de Venta</b> y la <b>Politica de Privacidad</b></label>
                        <br/>
                        <input type="checkbox" id="third" value="third"/><label><b>Compartir mis datos con terceros asociados</b></label>
                    </div>

                    <button onClick={this.sendRegister} className="rbtn"><b>Crear una cuenta de Space Gaming</b></button>
                </div>
            </div>
        );
    }
}

export default Register;

/*
<ReactPasswordStrength
                        className="rinput strength"
                        minLength={5}
                        minScore={2}
                        tooShortWord="Muy Corta"
                        scoreWords={['Debil', 'Normal', 'Buena', 'Fuerte']}
                        inputProps={{ type:"password", placeholder:"Contraseña", name:"psw", onKeyPress:this.catchInfo, required:true}}
                        changeCallback={this.changeCallback}
                    />
*/