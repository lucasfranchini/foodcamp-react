import React from "react";
import CalculatePrice from "./CalculatePrice";
export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [price,setPrice] = React.useState(props.price);
    const [type,setType] = React.useState(props.type)
    function marcar(){
        setCheck(true);
        CalculatePrice(price,type);
    }

    return (
        <li className={check===true ? "item checked": "item"} onClick={marcar}>
            <img src={props.img}alt=""/>
            <p><strong>{props.name}</strong></p>
            <p className="extras">{props.description}</p>
            <p> R$ {props.price}</p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </li>
    );
}