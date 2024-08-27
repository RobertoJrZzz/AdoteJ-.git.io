import React from 'react'
import Bob from '../images/Bob.jpg' 
import Lua from '../images/Gatin.jpg' 
import Pedro from '../images/pedro.jpg' 
import Rita from '../images/Rita.jpg' 
import Claudio from '../images/Claudio.jpg' 
import Brunin from '../images/Brunin.jpg' 
import Lulu from '../images/Lulu.jpg'
import { Link } from 'react-router-dom'






export const dogs = [
    {
        id: 1,
        raca: 'Golden',
        nome: 'Bob',
        localizacao: 'Rio de Janeiro',
        idade: '3 anos',
        pic: Bob,
    },
   
    {
        id: 3,
        raca: 'Buldog',
        nome: 'Pedro',
        localizacao: 'Bahia',
        idade: '5 anos',
        pic: Pedro,
    },

    {
        id: 6,
        raca: 'Corgi',
        nome: 'Lulu',
        localizacao: 'EUA',
        idade: '5 anos',
        pic: Lulu,
    },

    {
        id: 7,
        raca: 'Caramelo',
        nome: 'Brunin',
        localizacao: 'Rio de Janeiro',
        idade: '7 anos',
        pic: Brunin,
    },
]

export const cats = [

    {
        id: 2,
        raca: 'Branco',
        nome: 'Lua',
        localizacao: 'São Paulo',
        idade: '4 anos',
        pic: Lua,
    },
    
    {
        id: 4,
        raca: 'Branco',
        nome: 'Rita',
        localizacao: 'Nova Iguaçu',
        idade: '1 anos',
        pic: Rita,
    },
    
    {
        id: 5,
        raca: 'Social',
        nome: 'Claudio',
        localizacao: 'Campo Grande',
        idade: '2 anos',
        pic: Claudio,
    },

]


