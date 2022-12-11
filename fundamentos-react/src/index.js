import'./index.css'
import  ReactDOM  from "react-dom";
import React from 'react'

import Primeiro  from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const tag = <label >Olá React!</label>


// ReactDOM.render(
//     <div>
//         {tag}
        
//     </div>,
//     document.getElementById('root')
// )
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro" nota={ 9.3}/>
            <Fragmento/>
    </div>,
    document.getElementById('root')
)