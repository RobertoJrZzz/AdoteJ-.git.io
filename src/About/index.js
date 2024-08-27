import React from "react";
import { Link } from "react-router-dom";
import Adote from '../images/cropped-final-4.png'
import MyLogo from '../images/logotipo adoteja 2.png' 

export default function SobreNos(){
    return(
    <div className='Content-Start'>
                
        <Link to="/" className='link'>
        <img className="MyLogo" src={MyLogo}/>
        </Link>
        

        <div>
        
            <h1 className="titulo">Sobre nós</h1>

            <h1 className="titulo2">Bem-vindo ao Adote Já!</h1>

            <p className="txt">No Adote Já!, acreditamos que todos os animais merecem uma chance de encontrar um lar amoroso e seguro.<br/>
                Somos uma iniciativa dedicada a conectar pessoas apaixonadas por animais com pets que estão esperando<br/> 
                por uma nova família. Nossa missão é tornar o processo de adoção mais fácil, transparente e gratificante<br/>
                para todos.
            </p>

            <br/>

            <h1 className="titulo2">Quem Somos</h1>

            <p className="txt">Somos um grupo de entusiastas dos direitos dos animais e profissionais comprometidos com a causa da adoção<br/>
                responsável. Combinamos nosso amor pelos animais com experiência em bem-estar animal, tecnologia e comunicação para criar<br/>
                uma plataforma que faça a diferença. Desde o início, nosso objetivo tem sido promover uma mudança positiva, ajudando tanto<br/>
                os animais quanto os futuros adotantes a encontrarem o match perfeito.
            </p>
            
            <br/>

            <h1 className="titulo2">O Que Fazemos</h1>

            <p className="txt">No Adote Já!, oferecemos uma plataforma intuitiva e eficiente onde você pode visualizar perfis de animais<br/> 
                disponíveis para adoção, ler histórias inspiradoras e conectar-se diretamente com abrigos e protetores responsáveis.<br/>
                Trabalhamos em colaboração com ONGs, abrigos e resgatadores para garantir que cada animal tenha a melhor chance possível<br/>
                 de ser adotado por uma família amorosa.
            </p>
            
            <br/>

            <h1 className="titulo2">Nosso Compromisso</h1>

            <p className="txt">Nosso compromisso vai além de apenas encontrar lares para os animais. Trabalhamos para promover a adoção<br/>
                responsável, oferecer recursos educativos e apoiar iniciativas de bem-estar animal. Acreditamos que a adoção é apenas<br/>
                o começo e que é vital garantir que cada animal se adapte bem ao novo lar e receba o amor e os cuidados que merece.
            </p>

            <br/><br/>

            <h1 className="titulo">Junte-se a Nós</h1>

            <h2 className="titulo2">Seja você um amante dos animais à procura de um novo amigo ou um protetor de animais em busca de uma plataforma para<br/>
                promover suas adoções, o Adote Já! está aqui para ajudar. Navegue, descubra e adote  juntos, podemos fazer a diferença<br/>
                na vida de muitos animais e humanos.<br/><br/>

            Obrigado por visitar o Adote Já! e por se unir a nós nessa jornada para dar aos animais uma segunda chance e encontrar a felicidade que eles merecem.
            </h2>

            <br/><br/>
            <h1>Equipe Adote Já!</h1>

        
        </div>

    </div>
    )
}