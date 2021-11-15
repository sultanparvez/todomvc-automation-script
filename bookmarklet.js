javascript:(function(){
    todos = prompt("How Many?");
    if (todos){
    for (x=1; x<=todos;x++){
    setTimeout(function (name){
        document.querySelector("input.new-todo").value=name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));
    }, x*100, "todo "+x)  } 
 }})()