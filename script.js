//یک آرایه خالی به اسم تسک تعریف میکنه
const tasks = [] ;
//تابعی تعریف کردیم که متن تسک  جدید رو به عنوان ورودی می گیره
//متد پوش کارش اینه که ورودی را به انتهای آرایه اضافه  کنه
function addTask (task) {
    tasks.push(task)
}
//تمام اعضای آرایه رو یکی یکی روی کنسول چاپ میکنه
function showTasks() {
    //از اندیس صفر شروع میکنه چون حلقه است تا آخرین عضو آرایه میره
    for (let i = 0; i<tasks.length;i++){
        //در برنامه نویسی شمارش معمولا از صفره ولی برای کاربر قشنگ تره که از یک شروع بشه
        //tasks[i] --> یعنی تسک شماره ی i ام در برتامه نویسی
        console.log(i +1 + "."+ tasks[i]);
    }
}
//شماره تسکی که کاربر انجام داده میخواد حذف کنه
function deletTask(number){
    // if--> برای اعتبار سنجی بررسی میکنه شماره وارد شده معتبره یعنی از تعدا کل تسک ها بیشتر نباهشه
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
