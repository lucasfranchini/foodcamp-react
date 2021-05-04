import Item from "../Item"

export default function PratoPrincipal(){
    const pratos = [
        {
            img:"imagens/frango_yin_yang 1.png",
            name: "Frango Yin Yang",
            description: <>Um pouco de batata,<br/>um pouco de salada</>,
            price: "R$ 14,90",
        },
        {
            img:"imagens/salmão.jpg",
            name: "salmão grelhado",
            description: <>Um pouco de cuscuz,<br/>um pouco de legume</>,
            price: "R$ 21,90",
        },
        {
            img:"imagens/macarrão.jpg",
            name: "Macarrão",
            description: <>Molho de tomate,<br/>queijo parmesão</>,
            price: "R$ 16,90",
        },
        {
            img:"imagens/ratatouille.jpg",
            name: "ratatouille",
            description: <>Um pouco de legume,<br/>mais legumes</>,
            price: "R$ 18,90",
        }
    ]
    
    return (
        <div className="principal">
        <p className="titulo">Primeiro, seu prato</p>
        <ul className="itens">
            {pratos.map((prato)=><Item img={prato.img} name={prato.name} description={prato.description} price={prato.price}/>)}
        </ul>
      </div>
    );
}