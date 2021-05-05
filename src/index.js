import ReactDOM from 'react-dom';
import Topo from "./cabecalho e rodape/Topo";
import PratoPrincipal from "./Food/PratoPrincipal";
import Bebida from "./Food/Bebida";
import Sobremesa from "./Food/Sobremesa";
import FinalizarCompra from './cabecalho e rodape/FinalizarCompra';

function App() {
    return (
        <>
            <Topo/>
            <PratoPrincipal/>
            <Bebida/>
            <Sobremesa/>
            <FinalizarCompra/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));