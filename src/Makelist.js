import Item from "./Item"
import React from "react";

export default function MakeList(props){ 
    
    return (
        <div className={"lista " + props.type}>
            <p className="titulo">{props.title}</p>
            <ul className="itens">
                {props.items.map((item,i)=><Item key={i}  item={item} selectedTypes={props.selectedTypes} setSelectedTypes={props.setSelectedTypes} type={props.type} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems}/>)}
            </ul>
      </div>
    );
}

