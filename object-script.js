var autodo = new function (){

    this.clickItem = function(item){
item.click();
}
this.toggleAll = function (){
document.querySelector("#toggle-all").click();
}
 this.selectItem =function (x){
document.querySelector("ul > li:nth-child("+x+") input.toggle").click()
}
this.deleteItem  =  function (x){
document.querySelector("ul > li:nth-child("+x+") button.destroy").click()
}
this.clearCompleted  =  function (){
document.querySelector(" button.clear-completed").click()
}
this.filterCompleted  =  function (){
location.hash ="/completed"
}
this.showAll  =  function (){
location.hash ="/"
}
this.filterActive  =  function (){
location.hash ="/active"
}
this.createToDo  =  function (name){
    document.querySelector("input.new-todo").value=name;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));
}
this.editToDo  =  function (x,Xvalue){
   document.querySelector(" ul.todo-list > li:nth-child("+ x +") > div > label").dispatchEvent(new Event('dblclick', {'bubbles':true}));
   document.querySelector(" ul.todo-list > li:nth-child("+ x + ") .edit").value=Xvalue;
   document.querySelector(" ul.todo-list > li:nth-child("+ x +") .edit").dispatchEvent(new Event('blur'));
}
}