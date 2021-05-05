import Item from "../Item";
export default function Sobremesa(){
    const sobremesas = [
        {
            img:"imagens/pudim.png",
            name: "Pudim",
            description: "Apenas Pudim",
            price: "14,90",
            type: "desert"
        },
        {
            img:"imagens/petit-gateu.jpg",
            name: "Petit Gateu",
            description: "Sorvete,bolo e calda",
            price: "16,90",
            type: "desert"
        },
        {
            img:"imagens/sorvete.jpg",
            name: "Sorvete",
            description: "Apenas sorvete",
            price: "8,90",
            type: "desert"
        },
        {
            img:"imagens/acai.jpg",
            name: "Açai",
            description: "Açai 500ml",
            price: "12,90",
            type: "desert"
        }
    ];
    
    return(
        <div className="sobremesa">
            <p className="titulo">Por fim, sua sobremesa</p>
            <ul className="itens">
                {sobremesas.map((sobremesa)=><Item item={sobremesa} />)}
            </ul>
      </div>
    );
}