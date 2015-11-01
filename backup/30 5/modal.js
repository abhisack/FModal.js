
var modCaller = document.querySelector(".container");





//DOM Elements Creation

var modal= document.createElement("div");
var modalHeader= document.createElement("header");
modal.appendChild(modalHeader);


var header_title= document.createElement("h2");
var header_btn= document.createElement("button");
header_btn.textContent= "X";
header_btn.classList.add("btn-close");
modalHeader.appendChild(header_title);
modalHeader.appendChild(header_btn);

var modal_section= document.createElement("section");
modal.appendChild(modal_section);
var modal_section_text= document.createElement("p");
modal_section.appendChild(modal_section_text);



document.body.appendChild(modal);
modal.classList.add("modal");




/**
var modal= document.querySelectorAll(".modal");
***/

var opener= document.querySelector("#modal-opener");
$(document).on("click", "[data-entrance]", openModal);
 
function openModal(e) {
    var item= this;
    var modalTitle= this.getAttribute("data-title");
    var modalText= this.getAttribute("data-text");
    header_title.textContent= modalTitle;
    modal_section_text.textContent= modalText;
   
    
      var entrance= this.getAttribute("data-entrance");
    if(entrance==="modal-scale") {
               modal.classList.remove("modal-unscaled");
        modal.classList.remove("modal-untranslated");
        modal.classList.remove("modal-unfaded");
        modal.classList.add("modal-scaled");
    }
    
    
    
   else if((entrance==="modal-translate")) {
            modal.classList.remove("modal-untranslated");
        modal.classList.remove("modal-unfaded");
        modal.classList.remove("modal-unscaled");
         modal.classList.add("modal-translated");
    }
    
    
        else if((entrance==="modal-fade")) {
               modal.classList.remove("modal-unfaded");
                 modal.classList.remove("modal-untranslated");
        modal.classList.remove("modal-unscaled");
         modal.classList.add("modal-faded");
    }
    
    
modal.classList.add("modal-is-opened");
     modal.style.pointerEvents= "auto";

    
     var close= header_btn;
    
    close.addEventListener("click", closeModal, false);
   
    e.preventDefault();
}


  


function closeModal(e) {
modal.classList.remove("modal-is-opened");
    modal.style.pointerEvents= "none";
    
    if(modal.classList.contains("modal-scaled")) {
        modal.classList.remove("modal-scaled");
        modal.classList.add("modal-unscaled");
        
       }
    
    else if(modal.classList.contains("modal-translated")) {
        modal.classList.remove("modal-translated");
        modal.classList.add("modal-untranslated");
       }
    
    else if(modal.classList.contains("modal-faded")) {
        modal.classList.remove("modal-faded");
        modal.classList.add("modal-unfaded");
       }
    
    e.preventDefault();
}





