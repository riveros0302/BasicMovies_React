import React, { useState } from "react";

export const Buscador = ({ listMovies, setListMovies }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    // Crear state y actualizarlo
    const searchValue = e.target.value;
    setSearch(searchValue);

    //filtrar para buscar coincidenicias
    let moviesFilter = listMovies.filter((movie) => {
      return movie.titulo
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });

    if (e.target.value.length <= 0 || moviesFilter <= 0) {
      moviesFilter = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    //Actualiar el estado del listado principal con lo que filtré
    setListMovies(moviesFilter);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {search}</h3>
        {notFound && search.length >= 2 && (
          <span className="not-found">
            No se ha encontrado ninguna coincidencia
          </span>
        )}

        <form action="">
          <input
            type="text"
            id="search_field"
            name="search"
            autoComplete="off"
            onChange={searchMovie}
          />
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};
