import React, { useState } from "react";
import { Link } from "react-router-dom";
import Adote from '../images/cropped-final-4.png';
import MyLogo from '../images/logotipo adoteja 2.png';
import { dogs } from "../utils/dogs";
import { cats } from "../utils/dogs";


export default function Pets() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filtrar os animais com base no termo de pesquisa
    const filteredDogs = dogs.filter(dog =>
        dog.raca.toLowerCase().includes(searchTerm)
    );

    const filteredCats = cats.filter(cat =>
        cat.raca.toLowerCase().includes(searchTerm)
    );

   

    return (

        <div className='Content-Start'>

            <Link to="/" className='link'>
                <img className="MyLogo" src={MyLogo} alt="Logo" />
            </Link>

            <div className="pesquisa">
                <input className="pesquisa-content"
                    type="text"
                    id="searchInput"
                    placeholder="Escolha a Raça"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <h1>Nossos amiguinhos</h1>

            <div className="Amigos">
                {filteredDogs.map(item => (
                    <div className="friends-cont" key={item.id}>
                        <img className="Amigo" src={item.pic} alt={item.nome} />
                        <div className="txt-sep">
                            <p>{item.raca}</p>
                            <h1>{item.nome}</h1>
                            <h1>{item.idade}</h1>
                            <h1>{item.localizacao}</h1>
                        </div>
                    </div>
                ))}

                {filteredCats.map(item => (
                    
                    <div className="friends-cont" key={item.id}>
                        <img className="Amigo" src={item.pic} alt={item.nome} />
                        <div className="txt-sep">
                            <p>{item.raca}</p>
                            <h1>{item.nome}</h1>
                            <h1>{item.idade}</h1>
                            <h1>{item.localizacao}</h1>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
