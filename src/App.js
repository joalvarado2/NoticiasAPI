import React, {useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

  // definir la categoria y noticias
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => { 
    const consultarAPI = async () => {
      const url= `https://newsapi.org/v2/top-headlines?country=co&apiKey=419211862bfb4a779764d635ed8e088d`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI(); 
  },[categoria])
  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
