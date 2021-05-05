import ReactDOM from 'react-dom';
import Topo from "./Topo";
import PratoPrincipal from "./Food/PratoPrincipal";
import Bebida from "./Food/Bebida";

function App() {
    return (
        <>
            <Topo/>
            <PratoPrincipal/>
            <Bebida/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));