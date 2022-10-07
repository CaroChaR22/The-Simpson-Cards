import { useState } from "react";
import Contenedores from "./componentes/Contenedor";
import Header from "./componentes/Header";
import Welcome from "./componentes/Welcome";
import ContainerPersonajes from "./componentes/Personajes";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Contenedores>
      <Header />
      {/* en esta parte estamos cambiando el estado del componente: si es diferente a el componente de Personajes entonces mostrar el coponente welcome, de otra manera muestralo*/}
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ): (
        <ContainerPersonajes characters={characters} reqApi={reqApi} />
      )}
      
    </Contenedores>
  );
}

export default App;
