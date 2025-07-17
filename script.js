
let taskList =[];
let updateindex;
let name = document.getElementById('Name');
let eMail = document.getElementById('email');
let addUser = document.getElementById('add');
let List = document.getElementById('list');
let updateUser = document.getElementById('updatetask');
addUser.addEventListener('click' , function(){
    taskList.push(name.value + eMail.value);
    console.log(taskList);
    name.value = '';
    eMail.value = '';

    List.innerHTML='';
    for (let index = 0; index < taskList.length; index++) {
        List.innerHTML+=`<li>${taskList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        <button onclick="Edittask('${index}')">Edit</button>
        </li>`;
     
 }
});


function deletetask(index){
    taskList.splice(index, 1);

    List.innerHTML='';
    for (let index = 0; index < taskList.length; index++) {
       List.innerHTML+=`<li>${taskList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        </li>`;
     
    }
 
 }   
 function Edittask(index){
    //alert(`would you like to Edit task: ${taskList[index]}`);
    name.value = taskList[index]
    eMail.value = taskList[index];
    //eMail.value=taskList[index];
    updateindex=index;
    
}


updateUser.addEventListener('click' , function(){
 
    taskList[updateindex]=name.value+eMail.value;
 
    List.innerHTML='';
     for (let index = 0; index < taskList.length; index++) {
         List.innerHTML+=`<li>${taskList[index]}
           <button onclick="deletetask('${index}')">delete</button>
           <button onclick="Edittask('${index}')">Edit</button>
        </li>`;
         name.value = '';
         eMail.value = '';
     }
 })