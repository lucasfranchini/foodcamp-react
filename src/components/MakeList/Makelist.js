import "./Makelist.css";
import Item from "../Item/Item";
import React from "react";

export default function MakeList(props){ 
    return (
        <div className={"lista " + props.items[0].type}>
            <p className="titulo">{props.children}</p>
            <ul className="itens">
                {props.items.map((item,i)=><Item key={i} item={item} selectedTypes={props.selectedTypes} setSelectedTypes={props.setSelectedTypes} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems}/>)}
            </ul>
      </div>
    );
}

