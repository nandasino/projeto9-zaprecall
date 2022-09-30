import Pergunta from "./Pergunta"

export default function ContainerPerguntas(props) {
    const {perguntas,mostraPergunta,setMostraPergunta,cor,setCor,vira,setVira}= props;
    return (
        <>
        {perguntas.map((p)=> 
        <Pergunta 
        nome={p.name} 
        pergunta={p.question} 
        resposta={p.question}
        mostraPergunta={mostraPergunta}
        setMostraPergunta={setMostraPergunta}
        cor={cor}
        setCor={setCor}
        vira={vira}
        setVira={setVira}
        />
        )}
        </>
    );
}
