import Item from "./Item"

export default function MakeList(props){ 
    return (
        <div className={props.type}>
            <p className="titulo">{props.title}</p>
            <ul className="itens">
                {props.items.map((item)=><Item  item={item} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} type={props.type}/>)}
            </ul>
      </div>
    );
}

