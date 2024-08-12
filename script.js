let userInput = document.getElementById("inputField");
let button = document.getElementById("addButton");
let list = document.getElementById("userList");

function addListItem(){
    let value = userInput.value.trim();
    if(value !=""){
        let item = document.createElement('li')
        item.textContent = value

        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className ="deleteButton";
        deleteButton.onclick = function(){
            item.remove();
        }

        list.appendChild(item)
        item.appendChild(deleteButton);
        userInput.value = "";
        }
}