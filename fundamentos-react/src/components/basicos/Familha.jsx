import React from "react";
import FamilhaMembro from "./FamilhaMembro";
export default props => {
    return(
        <div>
            <FamilhaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamilhaMembro nome="Ana" {...props}/>
            <FamilhaMembro nome="Gustavo" sobrenome="Santos"/>
        </div>
    )
}