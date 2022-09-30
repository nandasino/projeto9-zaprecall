import Pergunta from "./Pergunta"

export default function ContainerPerguntas(props) {
    const {perguntas}= props;
    return (
        <>
        {perguntas.map((p,index)=> 
        <Pergunta 
        nome={p.name} 
        pergunta={p.question} 
        resposta={p.question}
        aberto={p.open}
        />
        )}
        </>
    );
}
