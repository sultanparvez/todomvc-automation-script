var randoBot = setInterval(function(){
    var theFunctions =[];
    for (var x in rando){
    if (typeof rando[x]=='function'){
        theFunctions.push(x)
    }}
    var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);
    rando[theFunctions[randomFunctionIndex]]()
    },2000);
    
    //clearInterval(randoBot)
    
    