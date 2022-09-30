import styled from 'styled-components';
import ImagemPlay from "../img/seta_play.png"
import ImagemVirar from "../img/seta_virar.png"
export default function Pergunta(props){
    const {nome,pergunta,resposta,mostraPergunta,setMostraPergunta,cor,setCor,vira,setVira}=props;
    return(
        <DivNomePergunta className='aberta'>
            {pergunta}<img src={ImagemVirar}/>
        </DivNomePergunta>
    )
}
const DivNomePergunta= styled.div`
    width: 300px;

    &.fechada{
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between
    }

    &.fechada > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    &.aberta{
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
    }
    &.aberta > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`;
