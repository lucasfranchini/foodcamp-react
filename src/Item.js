import React from "react";
import CalculatePrice from "./CalculatePrice";
export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [counter,setCounter] = React.useState(1);
    const [item] = React.useState(props.item);
    return (
        <li className={check===true ? "item checked": "item"} onClick={()=>{
            setCheck(true);
            CalculatePrice(item,counter);
        }}>
            <img src={item.img}alt=""/>
            <p><strong>{item.name}</strong></p>
            <p className="extras">{item.description}</p>
            <p> R$ {item.price}</p>
            <div className= {check===true ? "quantidade mostrar": "quantidade"}>
                <ion-icon name="remove-outline" style={{color: "#CF2B2B"}} onClick={()=>setCounter(counter-1)}></ion-icon>
                <span>{counter}</span>
                <ion-icon name="add-outline" style={{color: "#32B72F"}} onClick={()=>setCounter(counter+1)}></ion-icon>   
            </div>
        </li>
    );
}