function validation(){
    let name=document.getElementById("itemName").value;
    let price=document.getElementById("price").value;

    if(name==""){
        document.getElementById("nameError").innerHTML="Title is required";
    }
    else if(!(name.length>1&&name.length<=65)){
        alert("Title should have 2 to 65 characers.");
        returnfalse;
    }
    else if(!price.match(/^\d+$/)) {
        alert("Price has to be a number");
        returnfalse;
    }
}