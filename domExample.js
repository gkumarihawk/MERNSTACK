//an example on UI, by doing DOM manipulation
//html example

 <button id="newBtnBind">Practice Div</button> 

var btn = document.getElementById("newBtnBind");
var onclick = function(){alert("The name is " + this.name)}

btn.addEventListener("click", this.onclick.bind(user1), false);
btn.addEventListener("click", this.onclick, false);

var user1 = {
    name : "John",
    age : 23
}

btn.removeEventListener("click", this.onclick);

    
