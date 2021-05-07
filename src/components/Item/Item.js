import React from "react";
import CalculatePrice from "../CalculatePrice";
import addVerifiedItem from "./AddverifiedItem";
import removeVerifiedItem from "./RemoveVerifiedItems";

export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [counter,setCounter] = React.useState(0);
    const item = props.item;
    const selectedTypes = {...props.selectedTypes};
    const {selectedItems,setSelectedItems} = props;
    
    function markedItem(){
        if(!check){
            setCheck(true);
            addVerifiedItem(selectedTypes,item,selectedItems,setSelectedItems,counter,setCounter,props.setSelectedTypes);      
        }
    }

    
    
    return (
        <li className={check===true ? "item checked": "item"} onClick={markedItem}>
            <img src={item.img}alt=""/>
            <p><strong>{item.name}</strong></p>
            <p className="extras">{item.description}</p>
            <p> R$ {item.price}</p>
            <div className= {check===true ? "quantidade mostrar": "quantidade"}>
                <ion-icon name="remove-outline" style={{color: "#CF2B2B"}} onClick={()=>removeVerifiedItem(selectedTypes,item,selectedItems,setSelectedItems,counter,setCounter,props.setSelectedTypes,setCheck)}></ion-icon>
                <span>{counter}</span>
                <ion-icon name="add-outline" style={{color: "#32B72F"}} onClick={()=>addVerifiedItem(selectedTypes,item,selectedItems,setSelectedItems,counter,setCounter,props.setSelectedTypes)}></ion-icon>
            </div>
        </li>
    );
}