import ReactDOM from 'react-dom';
import Topo from "./Topo";
import PratoPrincipal from "./Food/PratoPrincipal";

function App() {
    return (
        <>
            <Topo/>
            <PratoPrincipal/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));