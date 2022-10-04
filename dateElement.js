//Creamos la estructura html para poderla agregar al DOM

export default (date) => {
     const dateElement = document.createElement("li");
     dateElement.classList.add("date"); //Le creamos una clase
     dateElement.innerHTML = date; //Le indicamos cual va a ser el contenido
     return dateElement;
}