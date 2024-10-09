import React, { useState } from "react";
import { SavedOnStorage } from "../helpers/SavedOnStorage";

export const Crear = ({ setListMovies }) => {
  const title = "Añadir pelicula";
  const [movie, setMovie] = useState({});

  const getFormValue = (e) => {
    e.preventDefault();

    //conseguir datos del formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //guardar en state
    setMovie(peli);

    // Actualizar estado del listado principal
    setListMovies((elements) => {
      // Asegurarse de que elements sea siempre un array
      return Array.isArray(elements) ? [...elements, peli] : [peli];
    });

    //guardar en localStorage
    SavedOnStorage("movies", peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{title}</h3>
        <form onSubmit={getFormValue}>
          <input type="text" placeholder="Titulo" id="titulo" name="titulo" />
          <p>{movie.titulo}</p>
          <textarea
            placeholder="Descripcion"
            id="descripcion"
            name="descripcion"
          ></textarea>
          <input type="submit" value="Guardar" />
        </form>
      </div>
    </>
  );
};
