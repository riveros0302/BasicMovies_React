import React, { useEffect, useState } from "react";
import { Editar } from "./Editar/Editar";

export const Listado = ({ listMovies, setListMovies }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setListMovies(movies);

    return movies;
  };

  const deleteMovie = (id) => {
    // Obtener peliculas almacenadas
    let movies_saved = getMovies();

    //Filtrar esas peliculas para que elimmine del array la que no queiro
    let newArrayMovies = movies_saved.filter(
      (movie) => movie.id !== parseInt(id)
    );

    //Actualizar estado del listado
    setListMovies(newArrayMovies);

    //Actualizar los datos en el local storage
    localStorage.setItem("movies", JSON.stringify(newArrayMovies));
  };

  return (
    <>
      {listMovies ? (
        listMovies.map((movie) => {
          return (
            <article className="peli-item" key={movie.id}>
              <h3 className="title">{movie.titulo}</h3>
              <p className="description">{movie.descripcion}</p>

              <button className="edit" onClick={() => setEditar(movie.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Eliminar
              </button>

              {/*Aparece form de editar */}
              {editar === movie.id && (
                <Editar
                  movie={movie}
                  getMovies={getMovies}
                  setEditar={setEditar}
                  setListMovies={setListMovies}
                />
              )}
            </article>
          );
        })
      ) : (
        <h3>No hay peliculas para mostrar</h3>
      )}
    </>
  );
};
