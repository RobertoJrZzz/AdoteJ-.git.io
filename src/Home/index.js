import React from "react";
import { Link } from "react-router-dom";
import Adote from '../images/cropped-final-4.png'
import MyLogo from '../images/logotipo adoteja 2.png' 

import Bob from '../images/Bob.jpg' 
import Lua from '../images/Gatin.jpg' 
import Pedro from '../images/pedro.jpg' 



export default function Home(){
    return(
        <>

        <div className='Content-Start'>
                
                
                <img className="MyLogo" src={MyLogo}/>
                

                <div>
                    <h1> Bem-vindo ao Adote Já!<br/>
                    Você está a um passo de transformar vidas e ganhar um novo amigo de quatro patas! No Adote Já!,<br/>
                    cada animalzinho é especial e está ansioso para encontrar um lar cheio de amor. Navegue pelas nossas<br/>
                    adoráveis opções, conheça histórias emocionantes e descubra como você pode fazer a diferença. Juntos,<br/>
                    podemos criar finais felizes e muitos momentos de alegria!<br/>
                    <br/>
                    Pronto para adotar? Acompanhe as nossas atualizações e dê início à sua jornada de adoção hoje mesmo. 🐾💖
                    <br/><br/>
                    Adote Já! - Onde o amor encontra um lar.</h1>
                </div>

        </div>

        <div className="inicio">


            <div className="head-text">
                <h1 className="titulo">Chegou a hora<br/>
                    de adotar!
                </h1>

                <p className="subtitulo">Aqui iremos proporcionar diversos amiguinhos<br/>
                para você ajudar. dê uma olhadinha <br/>e ache seu companheiro!</p>


                <Link to="/Pets"  className='link'>
                <button className="bn54">
                <span className="bn54span">Adote Já</span>
                </button>
                </Link>
            </div>

            <div>
            <img className="Logo" src={Adote}/>
            </div>
            
        </div>

       

        </>
    )
}