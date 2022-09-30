import Pergunta from "./Pergunta"

export default function ContainerPerguntas(props) {
    const {perguntas}= props;
    return (
        <>
        {perguntas.map((p)=> 
        <Pergunta 
        nome={p.name} 
        pergunta={p.question} 
        resposta={p.question}
        />
        )}
        </>
    );
}
