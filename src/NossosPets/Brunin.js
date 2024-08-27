import React from "react";
import { Link } from "react-router-dom";
import Adote from '../images/cropped-final-4.png'
import MyLogo from '../images/logotipo adoteja 2.png' 
import Brunin from '../images/Brunin.jpg' 




export default function BruninDog(){
    return(
    <div className='Content-Start'>
                
        <Link to="/" className='link'>
        <img className="MyLogo" src={MyLogo}/>
        </Link>
        

        <div>

        
        </div>

    </div>
    )
}