


let nameList =[];
let eMailList = [];
let userName = document.getElementById('Name');
let eMail = document.getElementById('email');
let addUser = document.getElementById('add');
let List = document.getElementById('list');
addUser.addEventListener('click' , function(){

    if (userName.value.trim() === '' || eMail.value.trim() === ''){       
       
            alert('please fill all fields');
            Event.preventDefault();
        }

    nameList.push(userName.value);
    eMailList.push(eMail.value);
    console.log(nameList,eMailList);
    userName.value = '';
    eMail.value = '';

    List.innerHTML='';
    for (let index = 0; index < nameList.length; index++) {
        List.innerHTML+=`<li>Name: ${nameList[index]} and Email: ${eMailList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        </li>`;
        
 }
});


function deletetask(index){
    nameList.splice(index, 1);
    eMailList.splice(index,1);
    List.innerHTML='';
    for (let index = 0; index < nameList.length; index++) {
       List.innerHTML+=`<li>Name:${nameList[index]},Email:${eMailList[index]}
        <button onclick="deletetask('${index}')">delete</button>
        </li>`;
    }
    
 };  

