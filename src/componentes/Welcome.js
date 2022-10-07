import styled from "styled-components";
import Logo from "../the-simpson.png";


export default function Welcome(props){
    const { reqApi } = props;

    return (
        <ContentLogo>

        <ContWelcomeText>Bienvenido, conoce las frases dando click en el logo</ContWelcomeText>
        <ImagenLogo src={Logo} alt="logo simpson"  onClick={reqApi} />

      </ContentLogo>
    )
}

const ImagenLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;
const ContWelcomeText = styled.p`
color: #F277BB;
text-align: center;
font-weight: 900;
padding: 50px 0 10px;
font-size: 25px;
`;
