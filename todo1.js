let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
console.dir(ul);

btn.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    

    item.appendChild(delbtn);
    console.log(item);
    console.dir(ul);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});