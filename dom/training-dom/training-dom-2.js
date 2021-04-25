var inventories = [
    "Book",
    "Bolpoin",
    "Eraser"
]

function showItems(){
    var listItems = document.getElementById("list-items");
    listItems.innerHTML = "";

    inventories.forEach((inventory, index) => {
        var btnEdit = "<a href='#' onclick='editItem("+index+")' >Edit</a>";
        var btnDel = "<a href='#' onclick='deleteItem("+index+")' >Delete</a>";

        listItems.innerHTML += 
        "<li>" +
            inventories[index] + 
            " ["+ btnEdit +"]" +
            " ["+ btnDel +"]" +
        "</li>";
    });
}
function addItems(){
    var input = document.querySelector("input[name=item]");
    
    if(input.value != ''){
        inventories.push(input.value);
    }else{
        alert("Don't forget to fill in the fields!");
    }            
    showItems();
}
function editItem(id){
    var newItem = prompt("New name", inventories[id]);
    newItem = (newItem == null) ? inventories[id] : newItem;
    inventories[id] = newItem;
    showItems();
}
function deleteItem(id){
    inventories.splice(id, 1);
    showItems();
}

showItems();