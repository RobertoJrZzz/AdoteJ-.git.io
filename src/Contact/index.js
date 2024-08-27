import React from "react";
import { Link } from "react-router-dom";
import Adote from '../images/cropped-final-4.png'
import MyLogo from '../images/logotipo adoteja 2.png' 

export default function Contato(){
    return(
    <div className='Content-Start'>
                
        <Link to="/" className='link'>
        <img className="MyLogo" src={MyLogo}/>
        </Link>
        

        <div>

            <div className="Contact">
            <i class="ri-facebook-circle-fill"><a href="" className="content-cnt"> Facebook</a></i>
            <i class="ri-instagram-fill"><a href="" className="content-cnt"> Instagram</a></i>
            <i class="ri-whatsapp-line"><a href="" className="content-cnt"> Whatssap</a></i>
            <i class="ri-mail-line"><a href="" className="content-cnt"> E-Mail</a></i>
            <p>(21) 978243540</p>
            </div>

            <br/><br/>
            <h1>Equipe Adote Já!</h1>

        
        </div>

    </div>
    )
}