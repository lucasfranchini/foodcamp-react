import "./Orders.css";
import PrintItem from "./PrintItem";

export default function Orders(props){  
    const total = {...props.total}
    total.price = total.price.toFixed(2);
    total.price = total.price.replace(".",",");
    
    return(
        <div className="orders">
            {props.selectedItems.map((item,i)=>(<PrintItem key={i} item={item} type="item-selecionado"/> ))}
            <PrintItem item={total} type="item-selecionado total"/>
        </div>

    );
}