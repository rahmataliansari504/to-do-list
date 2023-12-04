
const inputBox = document.getElementById("addtask");
const display = document.getElementById("element");
function addTask(){
    if(inputBox.value===''){
        alert("you not write any task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        display.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let img = document.createElement("img");
        img.src="edit.png";
        li.appendChild(img);
    }
    inputBox.value="";
}
display.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);