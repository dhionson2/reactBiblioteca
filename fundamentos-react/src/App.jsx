import './App.css'
import React from "react";

import DiretaPai from './components/basicos/comunicacao/DiretaPai';
import Usuarioinfo from './components/basicos/condicional/Usuarioinfo';
import ParOuImpar from './components/basicos/condicional/ParOuImpar';
import TabelaProdutos from './Repeticao/TabelaProdutos';
import ListaAlunos from './Repeticao/ListaAlunos';
import FamilhaMembro from './components/basicos/FamilhaMembro';
import Familha from './components/basicos/Familha';
import Card from "./components/basicos/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro  from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default  _ =>
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#10-Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#09-Renderização condicional" color="#188198">
                   <Usuarioinfo usuario={{nome : 'Fernando Ronaldinho'}}></Usuarioinfo>
                   <Usuarioinfo usuario={{}}></Usuarioinfo>
                </Card>
                <Card titulo="#08-Renderização condicional" color="#982395">
                   <ParOuImpar numero={23}></ParOuImpar>
                </Card>
                <Card titulo="#07-Desafio Repetição" color="#3A9AD9">
                   <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#05-Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#04-Componente com filhos" color="#00C8F8">
                    <Familha sobrenome="Ferreira">
                        <FamilhaMembro nome="Pedro" />
                        <FamilhaMembro nome="Ana" />
                        <FamilhaMembro nome="Gustavo" />
                    </Familha>
                </Card>
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
    

