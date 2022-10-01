import { useState } from "react";
import Pergunta from "./Pergunta"

export default function ContainerPerguntas(props) {
    const {perguntas}= props;
    const [listaPerguntas,setListaPerguntas]=useState(perguntas);
    function abrirPergunta(index){
        const atualizaPerguntas= perguntas.map((element,indexelement) => {
            if(index===indexelement){
                return(
                    {...element,open :true}
                )
            }
            else{
                return (
                    {...element,open:false}
                )
            }
        });
    setListaPerguntas(atualizaPerguntas);
    }

    return (
        <>
        {listaPerguntas.map((p,index)=> 
        <Pergunta 
        nome={p.name} 
        index={index}
        pergunta={p.question} 
        resposta={p.question}
        aberto={p.open}
        abrirPergunta={abrirPergunta}
        />
        )}
        </>
    );
}
