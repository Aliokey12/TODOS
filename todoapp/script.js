const form = document.querySelector('form');
const input = document.querySelector('input');
const todos = document.querySelector('ul');


form.addEventListener('submit',(e) =>{
e.preventDefault();

const todoText = input.value
if (todoText) {
    const todoEl = document.createElement('li')
    todoEl.innerText = todoText
todos.appendChild(todoEl)

todoEl.addEventListener('click',()=>{
todoEl.classList.toggle('completed')
});
todoEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    todoEl.remove();
})


input.value = '';
}



})
