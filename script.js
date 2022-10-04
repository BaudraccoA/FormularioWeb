import { addTask } from './components/addTask.js';

   
    const btn = document.querySelector("[data-form-btn]")

    

/*btn.addEventListener("click", function(evento){
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});*/

//Arrow functions o funciones anonimas

  btn.addEventListener("click", addTask); 




