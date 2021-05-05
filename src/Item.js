import React from "react";
import CalculatePrice from "./CalculatePrice";
export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [item] = React.useState(props.item);
    return (
        <li className={check===true ? "item checked": "item"} onClick={()=>{
            setCheck(true);
            CalculatePrice(item);
        }}>
            <img src={item.img}alt=""/>
            <p><strong>{item.name}</strong></p>
            <p className="extras">{item.description}</p>
            <p> R$ {item.price}</p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </li>
    );
}