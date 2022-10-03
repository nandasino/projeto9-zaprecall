import styled from 'styled-components';

export default function Botoes(props){
    const {responderPergunta,index}=props;
    const botoes = [
        {texto:"Não lembrei",cor:"vermelho"},
        {texto:"Quase não lembrei",cor:"amarelo"},
        {texto:"Zap!",cor:"verde"},
    ];
    return(
        <>
        <DivBotoes>
            {botoes.map((b)=><Botao onClick={()=>responderPergunta(b.cor,index)} className={b.cor}>{b.texto}</Botao>)}
        </DivBotoes>
        </>
    )
}
const DivBotoes= styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 20px;
`;
const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    padding:5px;
    
    &.vermelho {
        background:#FF3030;
        border: 1px solid #FF3030;
       }
    &.verde {
        background: #2FBE34;
        border: 1px solid #2FBE34;
       }
    &.amarelo {
        background: #FF922E;
        border: 1px solid #FF922E;
       }
`;