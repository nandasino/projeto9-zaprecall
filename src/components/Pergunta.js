import styled from 'styled-components';
import play from "../img/seta_play.png"
export default function Pergunta(props){
    const {nome,pergunta,resposta,aberto,respondido,cor}=props;
    return(
        <DivPergunta>{nome}<img src={play}/></DivPergunta>
    )
}
const DivPergunta= styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between
`;
