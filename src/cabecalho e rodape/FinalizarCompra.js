export default function FinalizarCompra(props){
    const {principal,drink,desert} = props.selectedItems;
    
    if(principal===true && drink===true && desert===true){
        return (
            <div className="final">
                <button > Finalizar pedido</button>
            </div>
        );
    }
    else{
        return (
            <div className="final">
                <button > Selecione os 3 itens<br/>
                para fechar o pedido</button>
            </div>
        );
    }  
}