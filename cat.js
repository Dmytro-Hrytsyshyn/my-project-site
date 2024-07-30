const taskInput = document.querySelector('#task-input');
const form = document.querySelector('.form-input');
const taskList = document.querySelector('#link-ul');
const emptyList = document.querySelector('.li-ada');
console.log();

form.addEventListener('submit', addTask) 

function addTask (event) {

    event.preventDefault();

    const inputText = taskInput.value;


    const taskHTML = `<li class="lishka"><span>${inputText}</span>
                <button data-action="delete" class="xxx">
                 <svg class="svgg" width="30" height="30">
                <use href="./symbol-defs.svg#icon-close">aa</use>
                </svg>
                </button>
            </li>`

            console.log(taskHTML);
    taskList.insertAdjacentHTML('beforeend', taskHTML);

    taskInput.value = "";
    taskInput.focus();


    if(taskList.children.length > 1){
        emptyList.classList.add('visually-hidden');

    }
}



taskList.addEventListener('click', deleteTask)
function deleteTask(event) {
    console.log(event.target);
    if(event.target.dataset.action === "delete"){
        // console.log("Delte");
        const removeLishka = event.target.closest('.lishka');
        removeLishka.remove();

        if(taskList.children.length === 1){
            emptyList.classList.remove('visually-hidden');
    
        }
    }
}