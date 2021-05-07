import {Link} from "react-router-dom";
export default function FinalizarCompra(props){
    const {principal,drink,desert} = props.selectedTypes; 
    console.log(props.selectedTypes);
    let texto;
    const confirmation = (principal===true && drink===true && desert===true);
    if(confirmation){
        texto = (<Link to="/revisar">Finalizar pedido</Link>)
    }else texto=(<>Selecione os 3 itens <br/> para fechar o pedido</>);
      return (
            <div className="final">
                <button className={confirmation ?"fechar-pedido":undefined}> {texto} </button>
            </div>
        );
  
}