/*Suma*/
function sumar(){
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;
    document.getElementById('resultado').innerHTML = resultado;
}

//Informacion Date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Tasks Container
const tasksContainer = document.getElementById('tasksContainer')

const setDate = () =>{ //Proceso que nos mostrara la fecha
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

//Agregar evento
const addNewTask = event =>{
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState); //Cuando damos click llamamos a la funcion changeTaskState(estado de las tareas)
    task.textContent = value;
    tasksContainer.prepend(task); //Para que cada elemento se agregue arriba de todo 
    event.target.reset();
}; 

const changeTaskState = event => {
    event.target.classList.toggle('done'); //
};
  
/*
//funcion para ordenar 
const order = () =>{
    const done = []; //tareas hechas
    const toDo = []; //tareas por hacer
    //Vamos a acceder a cada una de las tareas
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el) //condicional
    })
    return[...toDo, ...done];
}
*/

const renderOrderedTasks = () =>{
    order().forEach(el => tasksContainer.appendChild(el)) 
}
setDate();

/*Validación de Formulario*/

function validar(){
    var form = document.form;
       if(form.nombres.value==0){
        var alertaNombres = document.getElementById('alertaNombres').innerHTML = "*";
        form.nombres.value="";
        form.nombres.focus();
        return false;
    }if(form.apellidos.value==0){
        var alertaNombres = document.getElementById('alertaApellidos').innerHTML = "*";
        form.apellidos.value="";
        form.apellidos.focus();
        return false;
    }if(form.email.value==0){
        var alertaEmail = document.getElementById('alertaEmail').innerHTML = "*";
        form.email.value="";
        form.email.focus();
        return false;
    }if(form.telefono.value==0){
        var alertaTelefono = document.getElementById('alertaTelefono').innerHTML = "*";
        form.telefono.value="";
        form.telefono.focus();
        return false;
    }if(form.obs.value==0){
        var alertaObs = document.getElementById('alertaObs').innerHTML = "*";
        form.obs.value="";
        form.obs.focus();
        return false;
    }
}