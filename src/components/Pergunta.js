import { useState } from 'react';
import styled from 'styled-components';
import ImagemPlay from "../img/seta_play.png"
import ImagemVirar from "../img/seta_virar.png"

function PerguntaAberta(props){
    const {pergunta}=props;
    return(
        <PerguntaAbertaDiv>
            {pergunta}
            <img src={ImagemVirar}/>
        </PerguntaAbertaDiv>
    )
}

function PerguntaFechada(props){
    const {nome,index,abrirPergunta}=props
    return(
    <PerguntaFechadaDiv onClick={()=>abrirPergunta(index)}>
        {nome}<img src={ImagemPlay}/>
    </PerguntaFechadaDiv> 
    )
}
export default function Pergunta(props){
    const {nome,index,pergunta,resposta,aberto,abrirPergunta}=props; 
    return(
        <>
        {aberto===true? 
        <PerguntaAberta pergunta={pergunta}/>:
        <PerguntaFechada nome={nome} index={index} abrirPergunta={abrirPergunta}/>
        }
        </>
    )
}
const PerguntaFechadaDiv= styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;
const PerguntaAbertaDiv=styled.div`

    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`;