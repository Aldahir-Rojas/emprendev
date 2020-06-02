import React, {Component} from "react"
import "./styles/Somos.css"
import "bulma/css/bulma.css"
import img2 from "../imagenes/img2.jpg"


export class Somos extends Component{


    render(){



        return(
                <div className="container-somos">
                    <div className="imagen-somos">
                        <img className="img-somos" src={img2}/>

                    </div>  

                    <div className="texto">
                        
                        <h1 className="titulo1">¿Quienes somos?</h1>

                        <div className="descripcion">
                        <p>Somos un grupo de estudiantes UNI, que
                        brindamos soluciones tecnológicas para 
                        convertir todo tipo de negocio a digital.</p> 
                        </div>

                       </div>

                </div>

        )
    }
}
