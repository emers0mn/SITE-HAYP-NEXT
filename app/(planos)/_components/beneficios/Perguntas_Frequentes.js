import React from "react";
import './benefits.css';

function Perguntas_Frequentes(props) {

    return (
        <div>
                        <ul className="perguntas">
                            <li className="lista-perguntas">
                            {props.perguntas}

                            <div id="resposta" className="resposta">
                            <br />    
                                {props.resposta}
                            </div>

                            </li>
                            
                            <img className="saber-mais" id="seta" src= {"/img/Seta.png"} alt='' />  
                        </ul>

                        
                    </div>
    )
}

export default Perguntas_Frequentes;