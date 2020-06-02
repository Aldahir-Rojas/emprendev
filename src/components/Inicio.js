import React , {Component} from "react"
import "./styles/Inicio.css"
import "bulma/css/bulma.css"
import movil from "../imagenes/movil.jpg"
import img2 from "../imagenes/img2.jpg"

export class Inicio extends Component{

    render(){
        console.log("entrar")

        return(
            <header className="header2">
                <div className="inicio">
                            <div className="div-img">
                            
                                    <img class=" imagen-movil" src={movil}/>
                               
                            </div>
                        <div className="titulos">
                            <h1 className="tituh1">Bienvenidos a EmprenDev</h1>
                            <p className=" subtip">Una forma de entrar a la Era Digital</p>
                        </div>
                         
                        
                </div>
            </header>

        )
    }



}