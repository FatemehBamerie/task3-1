
const tasks = [] ;
function addTask (task) {
    tasks.push(task)
}

function showTasks() {
    for (let i = 0; i<tasks.length;i++){
        console.log(i +1 + "."+ tasks[i]);
    }
}

function deletTask(number){
    if (number >= 1 && number <= tasks.length){
        tasks.splice(number - 1 , 1);
    
    } else{
        console.log("Task not found");
    }
}

function editTask(number, newTask){
    if(number >= 1 && number <= tasks.length){
        tasks[number - 1] = newTask;}
        else {
            console.log("Task not found")
            
    }
}

addTask("Learn JavaScript");
addTask("Practice HTML");
addTask("Practice CSS");

console.log("My Tasks:");
showTasks();

editTask(2, "Practice JavaScript");

deletTask(3)

console.log("After editing and deleting:");
showTasks();