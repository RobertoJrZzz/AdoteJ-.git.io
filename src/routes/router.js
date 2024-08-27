import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import SobreNos from "../About";
import Contato from "../Contact";
import Pets from "../Pets";
import BruninDog from "../NossosPets/Brunin";

export default function Rotas(){
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<SobreNos/>} path="/SobreNos"/>
            <Route element={<Contato/>} path="/Contato"/>
            <Route element={<Pets/>} path="/Pets"/>
            <Route element={<BruninDog/>} path="/Brunin"/>
        </Routes>
    )
}