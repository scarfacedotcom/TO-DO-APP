const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')

const newTemplate = (Todo) => {
   
   const html = `<li
   class="list-group-item d-flex justify-content-between align-items-center"
 >
   <span>${Todo}</span>
   <i class="far fa-trash-alt delete"></i>
 </li>` ;

 list.innerHTML += html
}

addForm.addEventListener('submit', e => {

    e.preventDefault()
    const Todo = addForm.add.value.trim();

    if(Todo.length) {
      newTemplate(Todo)
      addForm.reset()
    }
})

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})