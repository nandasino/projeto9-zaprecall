import { useState } from "react";
import Pergunta from "./Pergunta"

export default function ContainerPerguntas(props) {
    const {perguntas,responderPergunta,listaPerguntas,abrirPergunta}= props;

    return (
        <>
        {listaPerguntas.map((p,index)=> 
        <Pergunta 
        nome={p.name} 
        index={index}
        pergunta={p.question} 
        resposta={p.answer}
        aberto={p.open}
        abrirPergunta={abrirPergunta}
        responderPergunta={responderPergunta}
        check={p.check}
        />
        )}
        </>
    );
}
