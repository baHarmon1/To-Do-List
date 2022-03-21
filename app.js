// Linked
window.addEventListener('load', () => { // when the window loads, do this function
    const form = document.getElementById('new-task-form')
    const inputField = document.getElementById('new-task-input')
    const submitButton = document.getElementById('new-task-submit')
    const listOfTasks = document.getElementById('tasks')

    form.addEventListener('submit', (e) => { // on submit, where the event happened, do this
        e.preventDefault() // prevents the page refresh

        const task = input.value

        if (!task) { // if task is false, do this
            alert('Please fill out the task')
            return
        }

        const taskEle = document.createElement('div')
        taskEle.classList.add('task')

        const taskContentEle = document.createElement('div')
        taskContentEle.classList.add('taskContent')
        taskContentEle.innerText = task

        taskEle.appendChild(taskContentEle)

        listOfTasks.appendChild(taskEle)
    })
})