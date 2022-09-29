import PERGUNTAS from "./Perguntas"
import GlobalStyle from "./GlobalStyle"
import Conteudo from "./components/Conteudo"
export default function App() {
    return (
        <>
        <Conteudo perguntas={PERGUNTAS}/>
        <GlobalStyle/>
        </>
    );
}

