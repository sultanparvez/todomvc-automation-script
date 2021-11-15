var rando = new function(){

    function getRandomInt(x){
        return Math.floor(Math.random()*x)
    }
    function getRandomItemIndex(){
        Max = document.querySelectorAll("ul.todo-list li").length;
        if (Max==0) {
            console.log("No-item");
            return
        }
        x = getRandomInt(Max)+1;
        return x;
    }

    this.selectRandomItem = function(){
        x= getRandomItemIndex()
        if (x>0){
            console.log("Select item "+x);
            autodo.selectItem(x);
       }
    }
    this.toggleAll = function (){
        console.log("Toggle All")
        autodo.toggleAll()
    }
    this.deleteItem  =  function (){
        x=getRandomItemIndex();
        console.log("Delete Item "+x)
        autodo.deleteItem(x)
}
    this.clearCompleted  =  function (){
        console.log("Clear Completed")
        autodo.clearCompleted()
        }
        this.filterCompleted  =  function (){
            console.log("filter Completed")
            autodo.filterCompleted()
        }
        this.showAll  =  function (){
            console.log("show All")
            autodo.showAll()
        }
        this.filterActive  =  function (){
            console.log("filter Active")
            autodo.filterActive()
        }
        this.createToDo  =  function (){
            console.log("Creating Random Todo " +Date.now());
            autodo.createToDo("Random Todo "+Date.now())
        }
        this.editToDo  =  function (x,Xvalue){
            x=getRandomItemIndex();
            console.log("editing Todo"+x);
            autodo.editToDo(x,"Random Todo "+Date.now())
        }
}