var botToDoCount = 0;

var creatorBot = setInterval (function(){
    document.querySelector("input.new-todo").value="ToDo "+botToDoCount;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));
    botToDoCount++;
    if (botToDoCount>=25){
        clearInterval(creatorBot);
    }
},500)