import styled from "styled-components";

export default function Character(props) {
  const { dataCharacter } = props;
  const { character, image, quote } = dataCharacter;


  return (
    <ContainerPersonajes>
      <TitleName>{ character }</TitleName>
      <ContainerImage> 
        <Image src={image} alt={character} />
      </ContainerImage>
      <Parrafo > {quote} </Parrafo > 
    </ContainerPersonajes>
    
  );
}

const ContainerPersonajes = styled.div`
  margin: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  border-radius: 25px;
  box-shadow: 1px 4px 10px white;
  background-color:#398CBF;
  text-align: center;
`;

const TitleName = styled.h2`
color: #264653;
height: 40px;
justify-content: center;
align-items: center;
display: flex;
`;

const ContainerImage = styled.div`
height: 230px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    filter:brightness(50%);
  }
`;

const Image = styled.img`
width: 130px;
height: auto;
`;

const Parrafo = styled.h4`
color:#F2B90C;
height: 100px;
`;