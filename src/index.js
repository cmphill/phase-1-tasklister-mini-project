document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  createToDo(e.target.old_task_description.value)
  form.reset()
})

})
function createToDo(todo) {
  let p = document.createElement('p')
  let deletebtn = document.createElement('button')
  deletebtn.addEventListener('click',removeToDo)
  deletebtn.textContent = ' x'
  p.textContent = `${todo}  `
  p.appendChild(deletebtn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
 }

 function removeToDo(e) {
  e.target.parentNode.remove()
 }