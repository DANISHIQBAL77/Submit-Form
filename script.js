


let nameList =[];
let eMailList = [];
let updateindex;
let userName = document.getElementById('Name');
let eMail = document.getElementById('email');
let addUser = document.getElementById('add');
let List = document.getElementById('list');
let updateUser = document.getElementById('updatetask');
addUser.addEventListener('click' , function(){

    function checkAddInputs (){
            if (userName.value.trim() === '' || eMail.value.trim() === '' )
            {
                addUser.disabled = true;
            }
            else {
                addUser.disabled = false;
            }

    }
    if (userName.value.trim() === '' || eMail.value.trim() === '')
    {
        //alert('please fill all fields');
    };


    nameList.push(userName.value);
    eMailList.push(eMail.value);
    console.log(nameList,eMailList);
    userName.value = '';
    eMail.value = '';

    List.innerHTML='';
    for (let index = 0; index < nameList.length; index++) {
        List.innerHTML+=`<li>${nameList[index]} ${eMailList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        <button onclick="Edittask('${index}')">Edit</button>
        </li>`;
        
 }
});


function deletetask(index){
    nameList.splice(index, 1);
    eMailList.splice(index,1);
    List.innerHTML='';
    for (let index = 0; index < nameList.length; index++) {
       List.innerHTML+=`<li>${nameList[index]}${eMailList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        </li>`;
    }
    Edittask.style.visibility= 'visible';
 };  
 function Edittask(index){
    //alert(`would you like to Edit task: ${taskList[index]}`);
    userName.value = nameList[index]
    eMail.value = eMailList[index];
    updateindex=index;
    onclick = updateUser.style.visibility= 'visible';
    addUser.disabled= true;
};


updateUser.addEventListener('click' , function(){
 
    nameList[updateindex]=userName.value;
    eMailList[updateindex]=eMail.value;

 
    List.innerHTML='';
     for (let index = 0; index < nameList.length; index++) {
         List.innerHTML+=`<li>${nameList[index]} ${eMailList[index]}
           <button onclick="deletetask('${index}')">delete</button>
           <button onclick="Edittask('${index}')">Edit</button>
        </li>`;
         userName.value = '';
         eMail.value = '';
     }
 });

updateUser.addEventListener('click' , function(){

        this.style.visibility= 'hidden';
        addUser.disabled= false;

});