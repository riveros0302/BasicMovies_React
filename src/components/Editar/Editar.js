import React from "react";
import "./editar.css";

export const Editar = ({ movie, getMovies, setEditar, setListMovies }) => {
  const titleComponent = "Editar pelicula";

  const savedEdition = (e, id) => {
    e.preventDefault();

    //conseguir target del evento
    let target = e.target;

    //Buscar indice del objeto de la pelicula a actualizar

    const storedMovies = getMovies();
    const index = storedMovies.findIndex((movie) => movie.id === id);

    //crear objeto con ese id del index
    let movie_updated = {
      id,
      titulo: target.title.value,
      descripcion: target.description.value,
    };

    // actualizar el elmento con ese index
    storedMovies[index] = movie_updated;

    //guardar nuevo array objeto en local storage
    localStorage.setItem("movies", JSON.stringify(storedMovies));

    //actualiar state
    setListMovies(storedMovies);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titleComponent}</h3>
      <form className="formulario" onSubmit={(e) => savedEdition(e, movie.id)}>
        <input
          type="text"
          name="title"
          className="titulo_editado"
          defaultValue={movie.titulo}
        />

        <textarea
          name="description"
          defaultValue={movie.descripcion}
          className="descripcion_editada"
        />

        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
