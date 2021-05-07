import "./Orders.css";
import PrintItem from "../PrintItem";

export default function Orders(props){  
    props.total.price = props.total.price.toFixed(2);
    props.total.price =props.total.price.replace(".",",");
    
    return(
        <div className="orders">
            {props.selectedItems.map((item,i)=>(<PrintItem key={i} item={item} type="item-selecionado"/> ))}
            <PrintItem item={props.total} type="item-selecionado total"/>
        </div>

    );
}