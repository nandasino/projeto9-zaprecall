import styled from 'styled-components';
import play from "../img/seta_play.png"
export default function Pergunta(props){
    const {nome,pergunta,resposta}=props;
    return(
        <DivNomePergunta>
            {nome}<img src={play}/>
        </DivNomePergunta>
    )
}
const DivNOmePergunta= styled.div`
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
