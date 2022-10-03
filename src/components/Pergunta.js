import { useState } from 'react';
import styled from 'styled-components';
import ImagemPlay from "../img/seta_play.png"
import ImagemVirar from "../img/seta_virar.png"
import Botoes from './Botoes';

function PerguntaAberta(props){
    const {pergunta,resposta,responderPergunta,index,abrirPergunta}=props;
    const[girar,setGirar]=useState(false);

    return(
        <PerguntaAbertaDiv>
            {girar===true?resposta :pergunta}
            {girar===true? <Botoes responderPergunta={responderPergunta} index={index} abrirPergunta={abrirPergunta}/> : <img onClick={()=>setGirar(true)} src={ImagemVirar}/> }
        </PerguntaAbertaDiv>
    )
}

function PerguntaFechada(props){
    const {nome,index,abrirPergunta,check}=props
    return(
    <PerguntaFechadaDiv className={check} onClick={()=>abrirPergunta(index)}>
        {nome}<img src={ImagemPlay}/>
    </PerguntaFechadaDiv> 
    )
}
export default function Pergunta(props){
    const {nome,index,pergunta,resposta,aberto,abrirPergunta,responderPergunta,check}=props; 
    return(
        <>
        {aberto===true? 
        <PerguntaAberta pergunta={pergunta} resposta={resposta} responderPergunta={responderPergunta} index={index} abrirPergunta={abrirPergunta}/>:
        <PerguntaFechada nome={nome} index={index} abrirPergunta={abrirPergunta} check={check}/>
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
  cursor:pointer;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    &.vermelho{
        color:#FF3030;
        text-decoration:line-through;
    }
    &.verde{
        color:#2FBE34;
        text-decoration:line-through;
    }
    &.amarelo{
        color:#FF922E;;
        text-decoration:line-through;
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
        cursor:pointer;
      }
`;