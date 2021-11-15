var botToDoCount = 1;

var creatorBot = setInterval (function(){
    document.querySelector("input.new-todo").value="ToDo "+botToDoCount;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));
    botToDoCount++;
    if (botToDoCount>=10){
        clearInterval(creatorBot);
    }
},2000)