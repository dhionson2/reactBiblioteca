import React from "react";

import Card from "./components/basicos/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro  from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default  _ =>
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="#03-Desafio Aleatório">
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="Fragmento">
                <Fragmento/>
            </Card>
            <Card titulo="#02-Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro" nota={ 9.3}/>
            </Card>
            <Card titulo="#01-Primeiro componente">
            <Primeiro></Primeiro>
            </Card>
            
           
            
        </div>
    
