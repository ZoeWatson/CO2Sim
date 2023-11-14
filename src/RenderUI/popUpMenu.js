class PopUpMenu{
    constructor(){
        this.#print()
    }
    #print(){
        var content ='<p id="popUpTitle"> Main Title </p>'
        content = content+'<div id="mainContent"> Main Content </div>'
        content = content+'<button id="closePopUpMenu"> Close </button>'
        const containter = document.getElementById("popUpMenu")
        containter.innerHTML = content 
        containter.style.display = "none"; 
    }

    open(){
        document.getElementById("bubbleMap").style.display = "none"; 
        document.getElementById("popUpMenu").style.display = "block";
    }
    close(){
        document.getElementById("popUpMenu").style.display = "none";
        document.getElementById("bubbleMap").style.display = "block";
        document.getElementById("popUpTitle").innerHTML = "";
        document.getElementById("mainContent").innerHTML = "";
    }
}

export {PopUpMenu};