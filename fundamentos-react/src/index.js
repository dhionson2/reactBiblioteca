import'./index.css'
import  ReactDOM  from "react-dom";
import React from 'react'


const tag = <label >Olá React!</label>


ReactDOM.render(
    <div>
        {tag}
        
    </div>,
    document.getElementById('root')
)