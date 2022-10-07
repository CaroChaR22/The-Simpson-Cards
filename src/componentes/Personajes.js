import styled from "styled-components";
import Character from "./Personaje";

export default function ContainerPersonajes(props) {
  const { characters, reqApi } = props;

  return (
    <>
      <ContainerCharac>
        {characters.map((characters, index) => (
          <Character dataCharacter={characters} key={index} />
        ))}
      </ContainerCharac>

      <BotonContainer>
        <BotonStyle onClick={reqApi}>más personajes</BotonStyle>
      </BotonContainer>
    </>
  );
}

const ContainerCharac = styled.div`
  display: flex;
`;


const BotonContainer = styled.div`
width: 100%;
text-align: center;
`;

const BotonStyle = styled.button`
width: 20%;
height: 40px;
border-radius: 20px;
border: none;
font-style: italic;
font-size: 18px;
background-color: #F2B90C;

&:hover {
    color: hsla(14, 100%, 53%, 0.6);
}
`;