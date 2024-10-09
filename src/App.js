import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [listMovies, setListMovies] = useState([]);

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section className="content">
        {/*Aqui van las peliculas*/}
        <Listado listMovies={listMovies} setListMovies={setListMovies} />
      </section>

      <aside className="lateral">
        <Buscador listMovies={listMovies} setListMovies={setListMovies} />

        <Crear setListMovies={setListMovies} />
      </aside>

      {/*Pie de pagina*/}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript -
        <a href="http://rivplay.com">rivplay.com</a>
      </footer>
    </div>
  );
}

export default App;
