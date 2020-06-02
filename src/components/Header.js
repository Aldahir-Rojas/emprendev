import React , {Component} from "react"
import empre from "../imagenes/emprendev.jpg"
import "./styles/Header.css"
import "bulma/css/bulma.css"

export class Header extends Component{



   // 

    stylehe(){
        return{
            float : "right"
            

        }
    }
    


    state= {
        isSwitchOn : false
    }



        render(){

            //is-128x128
            //<figure class="image  imagenes">
            
             //  </figure>
            
            


            return(
                
                <header className="header">
                        <div className="container logo-nav-container">
                                <img src={empre}  className="img-empre" />
                            <nav className="navigation">
                                
                                <ul>
                                    <button className={this.state.isSwitchOn === true ? "button-m show-b" : "button-m"} style={this.stylehe()} >
                                    <span className="menu-icon"  onClick={() =>this.setState({
                                            isSwitchOn : !this.state.isSwitchOn
                                        
                                    })}>
                                        
                                    Ver menu</span>
                                    </button>
                                    <li className={this.state.isSwitchOn === true ? "show" : "#"}><a href="#">¿Quienes somos?</a></li>
                                    <li className={this.state.isSwitchOn === true ? "show" : "#"}><a href="#">¿Que hacemos?</a></li>
                                    <li className={this.state.isSwitchOn === true ? "show" : "#"}><a href="#">Precios</a></li>
                                    <li className={this.state.isSwitchOn === true ? "show" : "#"}><a href="#">Contactanos</a></li>
                                </ul>

                            </nav>


                        </div>
                </header>

                
            ) ;

        }


}