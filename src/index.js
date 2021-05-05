import ReactDOM from 'react-dom';
import Topo from "./cabecalho e rodape/Topo";
import MakeList from "./Makelist";
import FinalizarCompra from './cabecalho e rodape/FinalizarCompra';
import React from 'react';

function App() {
    const pratos = [
        {
            img:"imagens/frango_yin_yang 1.png",
            name: "Frango Yin Yang",
            description: "Um pouco de batata, um pouco de salada",
            price: "14,90",
            type: "principal"
            
        },
        {
            img:"imagens/salmão.jpg",
            name: "salmão grelhado",
            description: "Um pouco de cuscuz, um pouco de legume",
            price: "21,90",
            type: "principal"
        },
        {
            img:"imagens/macarrão.jpg",
            name: "Macarrão",
            description: "Molho de tomate, queijo parmesão",
            price: "16,90",
            type: "principal"
        },
        {
            img:"imagens/ratatouille.jpg",
            name: "ratatouille",
            description: "Um pouco de legume, mais legumes",
            price: "18,90",
            type: "principal"
        }
    ]
    const bebidas = [
        {
            img:"imagens/coca.jpg",
            name: "Refrigerante",
            description: <>Lata 350ml</>,
            price: "4,90",
            type: "drink"
        },
        {
            img:"imagens/laranja.jpg",
            name: "Suco",
            description: <>Copo 300ml</>,
            price: "5,90",
            type: "drink"
        },
        {
            img:"imagens/laranja.jpg",
            name: "Suco Grande",
            description: <>Copo 500ml</>,
            price: "7,90",
            type: "drink"
        },
        {
            img:"imagens/Odin.jpg",
            name: "Cerveja Artesanal",
            description: <>Garrafa 600ml</>,
            price: "16,00",
            type: "drink"
        }
    ];
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
    
    const [selectedItems,setSelctedItems] = React.useState({
        principal: false,
        drink: false,
        desert: false
    });
    return (
        <>
            <Topo/>
            <MakeList type="principal" title="Primeiro, seu prato" items={pratos}/>
            <MakeList type="bebida" title="Agora, sua bebida" items={bebidas}/>
            <MakeList type="sobremesa" title="Por fim, sua sobremesa" items={sobremesas}/>
            <FinalizarCompra selctedItems={selectedItems}/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));