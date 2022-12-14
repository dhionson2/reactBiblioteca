import React from "react";
import DiretaFilho from "./DiretaFilho";
export default props => {
    return(
       <div>
            <DiretaFilho nome="Pedro" idade="4" nerd={false}></DiretaFilho>
            <DiretaFilho nome="Lorenzo" idade="7" nerd={true}></DiretaFilho>
            <DiretaFilho nome="Karol" idade="24" nerd={false}></DiretaFilho>
       </div> 
    )
}