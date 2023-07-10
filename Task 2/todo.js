document.querySelector(".add-todo-task").onclick = function(){
    if(document.querySelector(".todo .add-task input").value.length == 0){
        alert("Please Enter To-do Task")
    }
    else{
        document.querySelector(".added-tasks").innerHTML += `
        <div class="todo-tasks-active">
            <span class="task-name">
                <h3 class="name-task">${document.querySelector('.todo .add-task input').value}</h3>
            </span>
            <button class="delete-task">X</button>            
        </div>
        `;
        var added_tasks = document.querySelectorAll(".delete-task");
        for (var i=0;i<added_tasks.length ;i++){
            added_tasks[i].onclick = function(){
                var result = confirm("Do you want to delete this task?");
                if(result){
                    this.parentNode.remove();
                }
            }
        }
    }
}