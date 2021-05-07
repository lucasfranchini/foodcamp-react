import "./Orders.css";
import PrintItem from "../PrintItem";
export default function Orders(props){
    const principal = props.selectedItems.filter((item)=>item.type==="principal");
    const drink = props.selectedItems.filter((item)=>item.type==="drink");
    const desert = props.selectedItems.filter((item)=>item.type==="desert");
    const total ={name:"TOTAL",price:25};
    return(
        <div className="orders">
            {principal.map((item,i)=>(<PrintItem key={i} item={item} type="item-selecionado"/> ))}
            {drink.map((item,i)=>(<PrintItem key={i} item={item} type="item-selecionado"/> ))}
            {desert.map((item,i)=>(<PrintItem key={i} item={item} type="item-selecionado"/> ))}
            <PrintItem item={total} type="item-selecionado total"/>
        </div>

    );
}