import { useState } from 'react';
import styled from 'styled-components';
import logo from "../img/logo.png"
import ContainerConcluidos from "./ContainerConcluidos"
import ContainerPerguntas from "./ContainerPerguntas"

export default function Conteudo(props){
    const {perguntas}=props;
    const [respondidas,setRespondidas]= useState([]);
    const quantidadePerguntas= perguntas.length;

    let dataPerguntas = perguntas.map((value) => ({
      ...value
    }));    

    function responderPergunta(resposta,index){
      if(respondidas.some((element)=>element.index===index)){
        return;
      }

      setRespondidas([...respondidas,{resposta:resposta,index:index}]);
      console.log(respondidas);
    }

    const [listaPerguntas,setListaPerguntas]=useState(dataPerguntas);

    function abrirPergunta(index,estado=true,resposta){
        const atualizaPerguntas= listaPerguntas.map((element,indexelement) => {
            if(index===indexelement){
                return(
                    {...element,open:estado, check:resposta}
                )
            }
            else{
                return (
                    {...element,open:false}
                )
            }
        });
    setListaPerguntas([...atualizaPerguntas]);
    }


    return(
        <>
        <ScreenContainer>
            <LogoContainer>
              <img src={logo}/>
              <h1>ZapRecall</h1>
            </LogoContainer>
            <ContainerPerguntas
             perguntas= {perguntas} 
             responderPergunta={responderPergunta}
             abrirPergunta={abrirPergunta}
             listaPerguntas={listaPerguntas}
             />
            <ContainerConcluidos quantidadePerguntas={quantidadePerguntas} respondidas={respondidas.length}/>
        </ScreenContainer>
        </>
    )
}
const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
const LogoContainer= styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img{
    width: 52px;
  };

  h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`