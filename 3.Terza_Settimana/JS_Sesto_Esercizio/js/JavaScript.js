// tre cose
// 1. funzione che aggiunge task    addTask
// 2. funzione che gestisce il task completo attachComplet (linea sbarrata)
// 3. una funzione che attachDelete (cancella le task)

// const handleSubmit = function (e) {
//     e, preventDefault()      // evita di inviare il form  (evita il comportamento di default)
//     addtask()
//     attachComplet()
//     attacgDelete()
// }


function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
}

function handleSubmit(e) {
    e.preventDefault();
    const text = textInput.value.trim();
    if (text !== '') {
        addTask(text);
        textInput.value = '';
    }
}

addButton.addEventListener('click', handleSubmit);

window.onload = function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

