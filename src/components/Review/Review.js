import "./Review.css";
import Topo from "../cabecalho e rodape/Topo";
import Orders from "../Orders/Orders";
import CalculatePrice from "../CalculatePrice";
import {Link} from "react-router-dom";
import organizeItems from "../OrganizeItems";
import createFinalMessage from "../createFinalMessage";

export default function Review(props){
    const {setSelectedItems,selectedItems} = props;
    selectedItems.sort(organizeItems);
    const total ={name:"TOTAL",price: 0};
    selectedItems.forEach(item => CalculatePrice(item,total));
    const finalMessage= encodeURIComponent(createFinalMessage(selectedItems,total));
    return(
        <div className="review">
        <Topo/>
        <h1>Revise seu pedido</h1>
        <Orders selectedItems={selectedItems} total={total}/>
        <a href={"https://wa.me/5532988417685?text="+finalMessage} target="_blank"><button className="confirm">Tudo certo, pode pedir!</button></a>
        <button className="cancel" onClick={()=>setSelectedItems([])}><Link to="/">Cancelar</Link></button>
        </div>
    );
}