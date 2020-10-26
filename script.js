function getTodos(){
    let todos = new Array;
    let todosStr = localStorage.getItem('todo');
    if(todosStr !== null){
        todos = JSON.parse(todosStr);
    }
    return todos;
}

function clearDefault(a) {
    if (a.defaultValue !== a.value){
        a.value = '';
    }
}

function add() {
    let task = document.getElementById("newItem").value;

    if(task === ""){
        alert("Please write something to add...");
    }else {
        let todos = getTodos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));

        show();
        clearDefault(document.getElementById("newItem"));
        document.getElementById("newItem").focus();
    }
    return false;
}

function remove() {
    let id = this.getAttribute('id');
    let todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

function show() {
    let todos = getTodos();
    let ihtml = '<ul>';
    for(let i=0; i<todos.length; i++){
        ihtml += `<li>${todos[i]}<button class="remove" id="${i}">&times;</button></li>`;
    }

    document.getElementById("todos").innerHTML = ihtml;

    let buttons = document.getElementsByClassName("remove");
    for (let j=0; j<buttons.length; j++){
        buttons[j].addEventListener("click", remove);
    }
}

document.getElementById("add").addEventListener("click", add);
show();