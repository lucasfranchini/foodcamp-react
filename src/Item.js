import React from "react";
import CalculatePrice from "./CalculatePrice";
export default function Item(props){
        
    const [check,setCheck] = React.useState(false);
    const [counter,setCounter] = React.useState(0);
    const item = props.item;
    const selectedTypes = {...props.selectedTypes};
    const {selectedItems,setSelectedItems} = props;
    
    function markedItem(){
        if(!check){
            setCheck(true);
            CalculatePrice(item,1);
            addVerifiedItem(selectedTypes);      
        }
    }
    function addVerifiedItem(selectedTypes){
        let items;
        if(counter===0){
            (item.type==="principal") && (selectedTypes.principal=true);
            (item.type==="drink") && (selectedTypes.drink=true);
            (item.type==="sobremesa") && (selectedTypes.desert=true);
            props.setSelectedTypes(selectedTypes); 
            items = [...selectedItems,{...item,qtd: 1}];  
                
        }
        if(counter>0){
            items = selectedItems.map((selectedItem)=>{
                (selectedItem.name === item.name) && selectedItem.qtd++;
                return selectedItem;
            })
            
        }
        setSelectedItems(items); 
        setCounter(counter+1);
    }
    function removeVerifiedItem(){
        if(counter-1===0){
            if(selectedItems.find((selectedItem)=>(selectedItem.type===item.type && selectedItem.name !== item.name))===undefined){
                item.type==="principal" && (selectedTypes.principal=false);
                item.type==="drink" && (selectedTypes.drink=false);
                item.type==="desert" && (selectedTypes.desert=false);
                props.setSelectedTypes(selectedTypes);
            }
            setCheck(false);
            setSelectedItems(selectedItems.filter((selectedItem)=>(selectedItem.name !== item.name)))
        }
        setCounter(counter-1);
        
    }
    
    return (
        <li className={check===true ? "item checked": "item"} onClick={markedItem}>
            <img src={item.img}alt=""/>
            <p><strong>{item.name}</strong></p>
            <p className="extras">{item.description}</p>
            <p> R$ {item.price}</p>
            <div className= {check===true ? "quantidade mostrar": "quantidade"}>
                <ion-icon name="remove-outline" style={{color: "#CF2B2B"}} onClick={removeVerifiedItem}></ion-icon>
                <span>{counter}</span>
                <ion-icon name="add-outline" style={{color: "#32B72F"}} onClick={addVerifiedItem}></ion-icon>
            </div>
        </li>
    );
}