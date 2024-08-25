//creating the close button for the classes and append a list
//my nodelist is an array

var myNodeList = document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodeList.length;i++) 
{
    var span = document.createElement("SPAN");
    //cross cha button add karanya sathi
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
    //span ek element aahe 
}
//taking an elemen from the class close so that if we encounter close it will hide the content
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    };
}
//add a checked symbol when clicking on alist item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(ev){
        if(ev.target.tagName === "LI"){
            ev.target.classList.toggle("checked");
        }
    },
   false 
);

//create a new list item by clicking on add button
function newElement(){
    var li =document.createElement("li");
    var inputValue =document.getElementById("myInput").value;
var t =document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue===""){
    alert("write anything !");

}
else{
    document.getElementById("myUL").append(li);
}
document.getElementById("myInput").value=""
var span = document.createElement("SPAN");
 //cross cha button add karanya sathi
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);
 for(i=0;i<close.length;i++){
    close[i].onclick =function() {
        var div =this.parentElement;
        div.stile.display="none";

    };
 }
 localStorage
}
