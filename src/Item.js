import React from "react";
import CalculatePrice from "./CalculatePrice";
export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [counter,setCounter] = React.useState(1);
    const item = props.item;
    const selectedTypes = {...props.selectedTypes};

    function markedItem(){
        if(!check){
            setCheck(true);
            CalculatePrice(item,1);    
            addVerifiedItem(selectedTypes);
            props.setSelectedTypes(selectedTypes);
        }
    }
    function addVerifiedItem(selectedTypes){
        if(props.type==="principal") selectedTypes.principal=true;
        if(props.type==="bebida") selectedTypes.drink=true;
        if(props.type==="sobremesa") selectedTypes.desert=true;
    }
    function removeVerifiedItem(){

    }
    return (
        <li className={check===true ? "item checked": "item"} onClick={markedItem}>
            <img src={item.img}alt=""/>
            <p><strong>{item.name}</strong></p>
            <p className="extras">{item.description}</p>
            <p> R$ {item.price}</p>
            <div className= {check===true ? "quantidade mostrar": "quantidade"}>
                <ion-icon name="remove-outline" style={{color: "#CF2B2B"}} onClick={()=>(counter-1===0) ? setCheck(false):setCounter(counter-1)}></ion-icon>
                <span>{counter}</span>
                <ion-icon name="add-outline" style={{color: "#32B72F"}} onClick={()=>setCounter(counter+1)}></ion-icon>   
            </div>
        </li>
    );
}