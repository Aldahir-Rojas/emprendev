import React , {Component} from "react"
import imgmo from "../imagenes/2.svg"
import "./styles/Hacemos.css"


export class Hacemos extends Component{

    render(){

        return(

                <div className="hacemos-ini">
                    <div className="titulo-se">
                    <h1>¿QUE HACEMOS?</h1>
                    <br/>
                    </div>
                    

                    <div className="servicio1">

                        

                        <div className="imgmo-d">
                        <img  className="imgmo" src={imgmo}/>
                        </div>
                        
                        <div className="descri-movil">
                                <h2>DESARROLLO MOVIL</h2>
                            <br/>
                            <p>
                                En una epoca donde debemos estar distanciados por el bien de 
                                las personas que queremos, en EmpreDev podemos ayudarte a que 
                                tu negocio siga generando ingresos, muchas personas necesitas 
                                tus productos, pero no pueden estar afuera mucho tiempo, ni 
                                hacer largas colas, gracias al desarrollo movil, con una aplicacion
                                podrias comunicarte y seguir ofreciendo tus productos a tus clientes
                                sin necesidad que vayan a la tienda a preguntar o tengan que esperar
                                que los atiendas, pueden pedir sus productos e ir a recogerlos 
                                facilmente.

                            </p>
                        </div>

                    </div>


                </div>
        )

    }

}