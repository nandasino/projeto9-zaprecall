import styled from 'styled-components';
import react from 'react';
export default function ContainerConcluidos(props) {
  const{quantidadePerguntas,respondidas}= props;
    return (
        <>
        <Footer>
          {`${respondidas}/${quantidadePerguntas} CONCLUÍDOS`}
        </Footer>
        </>
    );
}
const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;