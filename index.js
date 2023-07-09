var now = document.querySelectorAll(".score");
var before = []
for(var i=0 ; i<now.length; i++){       
    now[i].addEventListener("click", function() {
        before.push(this);
        if(before.length>1){
            before[0].classList.remove("vote");
            before.shift();
        }
        this.classList.add("vote");
    });
}

document.getElementsByTagName("button")[0].addEventListener("click", function(){
    if(before.length==0){
        return;
    }
    document.getElementById("rating-state").classList.add("of");
    console.log(before[0].innerText);
    document.getElementById("score").innerText = before[0].innerText;
    document.getElementById("tank-you-state").classList.remove("of");

})