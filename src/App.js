import MyNavbar from './components/Navbar'
import React, {useEffect, useState} from "react";


function App() {
    const [generos, setGeneros] = useState([]);
    const fetchGeneros = () => fetch('http://127.0.0.1:8000/filmes/generos/')
        .then(response => response.json())
        .then(data => setGeneros(data));

    useEffect(() => {
        fetchGeneros();
    }, []);

    window.geners = generos;

  return (
    <div className="App">
      <MyNavbar />
    </div>
  );
}

export default App;
