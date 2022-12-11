import'./index.css'
import  ReactDOM  from "react-dom";
import React from 'react'
import App from './App';



const tag = <label >Olá React!</label>


// ReactDOM.render(
//     <div>
//         {tag}
        
//     </div>,
//     document.getElementById('root')
// )
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)