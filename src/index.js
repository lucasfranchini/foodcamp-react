import ReactDOM from 'react-dom';
import Topo from "./Topo";
import PratoPrincipal from "./Food/PratoPrincipal";
import Bebida from "./Food/Bebida";
import Sobremesa from "./Food/Sobremesa";
import FinalizarCompra from './FinalizarCompra';

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