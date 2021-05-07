export default function createFinalMessage(selectedItems,total){
    let principal=0,drink=0,desert=0;
    let message = `
olá, gostaria de fazer o pedido:
- pratos:`;
    selectedItems.forEach(item => {
        
        if(item.type==="principal")
        {
            (principal>0) && (message+=', ')
            message += item.name;
            (item.qtd>1) && (message+=`(${item.qtd}x)`);
            principal++;
        }
        if(item.type==="drink")
        {
            (drink===0) && (message+='\n- Bebida: ');
            (drink>0) && (message+=', ')
            message += item.name;
            (item.qtd>1) && (message+=`(${item.qtd}x)`);
            drink++;
        }
        if(item.type==="desert")
        {
            (desert===0) && (message+='\n- Sobremesa: ');
            (desert>0) && (message+=', ')
            message += item.name;
            (item.qtd>1) && (message+=`(${item.qtd}x)`);
            desert++;
        }
    } );
    console.log(message);
    return message;
}