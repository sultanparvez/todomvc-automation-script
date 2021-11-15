function clickItem(item){
    item.click();
    }
    function toggleAll(){
    document.querySelector("#toggle-all").click();
    }
    function selectItem(x){
    document.querySelector("ul > li:nth-child("+x+") input.toggle").click()
    }
    function deleteItem(x){
    document.querySelector("ul > li:nth-child("+x+") button.destroy").click()
    }
    function clearCompleted(){
    document.querySelector(" button.clear-completed").click()
    }
    function filterCompleted(){
    location.hash ="/completed"
    }
    function showAll(){
    location.hash ="/"
    }
    function filterActive(){
    location.hash ="/active"
    }
    function createToDo(name){
        document.querySelector("input.new-todo").value=name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));
    }
    function editToDo(x,Xvalue){
       document.querySelector(" ul.todo-list > li:nth-child("+ x +") > div > label").dispatchEvent(new Event('dblclick', {'bubbles':true}));
       document.querySelector(" ul.todo-list > li:nth-child("+ x + ") .edit").value=Xvalue;
       document.querySelector(" ul.todo-list > li:nth-child("+ x +") .edit").dispatchEvent(new Event('blur'));
    }