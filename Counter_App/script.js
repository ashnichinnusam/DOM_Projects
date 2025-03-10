const counterEl = document.getElementById("counter");

let count = 0;

//accessing the counter using text content 

counterEl.textContent = count;

// increase
document.getElementById("Button1").addEventListener("click",function(){
    count++;
    console.log(count);
    counterEl.textContent=count;
});

// decrease
document.getElementById("Button2").addEventListener("click",function(){
    count--;
    console.log(count);
    counterEl.textContent=count;
});

// add by 10
document.getElementById("Button3").addEventListener("click",function(){
    count=count+10;
    console.log(count);
    counterEl.textContent=count;
});

//reset 
document.getElementById("Button4").addEventListener("click",function(){
    count=0;
    console.log(count);
    counterEl.textContent=count;
});