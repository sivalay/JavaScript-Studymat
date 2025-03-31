const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todoList = document.querySelector('.td-list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = input.value 

    if(todo){
        const todoEl = document.createElement('li')
        todoEl.classList.add('todo')
        todoEl.innerHTML = todo
        todoList.appendChild(todoEl)

        todoEl.addEventListener('')

        input.value = ''
    }

    
})