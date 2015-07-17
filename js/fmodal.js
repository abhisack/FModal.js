//DOM Elements Creation and appending

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
var modal_section_btn= document.createElement("a");
modal_section_btn.textContent= "Know more";
modal_section_btn.classList.add("section-btn");



// THE MAIN APPENDING!!! 
document.body.appendChild(modal);
modal.classList.add("modal");

[].forEach.call(document.querySelectorAll('[data-entrance]'), function (el) {
            el.addEventListener('click', function () {
                openModal;
            }, false);
        });
 
function openModal(e) {
    var item= this;
    /*** fetching data to be set to modalTitle and ModalText of header from attributes of clicked element(this) ***/
    var modalTitle= this.getAttribute("data-title");
    var modalText= this.getAttribute("data-text");
     var btnText= this.getAttribute("data-btn-text");
    var btnLink= this.getAttribute("data-btn-link");
    header_title.textContent= modalTitle;
    modal_section_text.textContent= modalText;
    
    
    
    /*** get the value of 'data-entrance attribute, add and remove appropriate classes accroding to the attribute ***/
    
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
    
    
//create new variable for header_btn for ease
     var close= header_btn;
    close.addEventListener("click", closeModal, false); //add event listener to close to handle closeModal function at the last
    //close modal when "esc" key is pressed
    window.addEventListener("keyup", function(e) {
    if(e.keyCode===27) {
        closeModal();
    }                       
     });
    
    
    /*** If 'data-btn' is set to 'yes', assign textContent and 'href' for button(modal_section_btn) we created
    earliner. And finally append button to modal_section***/
    
    /*** CAUTION:: Keep this peice of code at the last but before 'e.preventDefault()' of openModal function or it would become buggy ***/
    
         var button= this.getAttribute("data-btn");
    
    if(button==="yes") {
        modal_section_btn.textContent= btnText;
        modal_section_btn.setAttribute("href", "http://"+btnLink);
        modal_section.appendChild(modal_section_btn);
    } else {
        if(modal_section.childNodes[1]===modal_section_btn) {
        modal_section.removeChild(modal_section_btn);
        }
    }
   
    e.preventDefault();
}


  

// Event handle to be executed when close(header>.btn-close) is clicked
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





