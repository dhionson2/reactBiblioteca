import './App.css'
import React from "react";

import Card from "./components/basicos/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro  from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default  _ =>
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#03-Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>
                <Card titulo="#02-Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={ 9.3}/>
                </Card>
                <Card titulo="#01-Primeiro componente" color="#588C73">
                <Primeiro></Primeiro>
                </Card>
            </div>


            
           
            
        </div>
    

