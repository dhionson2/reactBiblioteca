import'./index.css'
import  ReactDOM  from "react-dom";
import React from 'react'

import Primeiro  from './components/basicos/Primeiro';

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
        
    </div>,
    document.getElementById('root')
)