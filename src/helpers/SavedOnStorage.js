export const SavedOnStorage = (key, element) => {
  //conseguir elementos que ya tenemos
  let elementos = JSON.parse(localStorage.getItem(key));

  //comprobar si es array
  if (Array.isArray(elementos)) {
    //añadir nuevo elemento
    elementos.push(element);
  } else {
    //crear array con nuevo elemento
    elementos = [element];
  }

  //guardar en local storage
  localStorage.setItem(key, JSON.stringify(elementos));

  //devolver objeto guardado
  return element;
};
