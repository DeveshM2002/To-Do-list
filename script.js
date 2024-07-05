const inputblock = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
const buttonevent = document.querySelector("button");
const inputevent = document.querySelector("input");
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
inputevent.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        if(inputblock.value === ''){
            alert("You must write something");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputblock.value;
            listcontainer.appendChild(li);
            inputblock.value = '';
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        savedata();
    }
});
buttonevent.addEventListener("click", function(){
    if(inputblock.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputblock.value;
        listcontainer.appendChild(li);
        inputblock.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    savedata();
});

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        savedata();
    }
}, false)

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();