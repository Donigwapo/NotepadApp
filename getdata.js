//addelement is a function
document.body.onload = addElement;


function addElement(){
  const date2 = new Date();   
  const n = date2.toDateString();
  const time = date2.toLocaleTimeString();
  const noteInput2 = document.getElementById("txtContent").value;
  
 if (document.getElementById("txtContent").value.length > 3) {
    document.getElementById("notes2").innerHTML = "Notes: "+'<a href="'+noteInput2+'">' +noteInput2+'</a>'+ " ||" +  n + " " + time ; 
  }
 }
 


  
const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("txtContent");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");
const saving = document.getElementById("saving");
const d = document.getElementById("p1");

//MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};



textarea = document.querySelector("#autoresizing");
//EVENTS
//openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
textarea.addEventListener('input', autoResize, false);


function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}
//---------------------------------Time----------
function time() {
const date2 = new Date();   
const n = date2.toDateString();
const time = date2.toLocaleTimeString();

document.getElementById("p1").innerHTML = n + " " + time;
}

setInterval(time, 100);
//-----------------------------------Time-----------

//ang "notes" sa getItem kay gikuha ka sa const notes nga variable sa taas
const notesStorage = localStorage.getItem("notes")
? JSON.parse(localStorage.getItem("notes"))
: [];


document.getElementById('txtContent').addEventListener('keydown', e => {
 
  const date2 = new Date();   
  const n = date2.toDateString();
  const time = date2.toLocaleTimeString();
  const notes2 = document.getElementById("notes2");

 document.getElementById("notes2").innerHTML = "Notes: " +'<a href="'+ e.target.value+'">'+ e.target.value + '</a>'+ " ||" +  n + " " + time ;
 //notes2.style.display = 'none';

});

//document.getElementById("notes").innerHTML = doni; 


//this is when the set key is triggered
function openInNewTab(url) {
 //e.preventDefault();
 window.open(url, '_blank').focus();

 if (document.getElementById("txtContent").value == ""){
  
 }else{

  const addNote = (txtContent, p1 ) => {
    notesStorage.push({
    txtContent,
    p1,
    });
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    return {id, txtContent, p1};
    };

  const newNote = addNote(
    noteInput.value,
    d.value,
  );
  
  listBuilder(newNote);
  noteInput.value="";
  d.value = "";
   
 

  }
}
 
const listBuilder = ({txtContent, p1}) => {  
  // Create elements
    const noteWithdate = document.createElement("div");
    const note = document.createElement("p");
   // const date = document.createElement("p");

 // Fill the content
    note.innerHTML = ' <button onclick="openModal(this)">Edit</button>'+ "Notes:" + '<a onclick="openModal(this)",href="'+txtContent+' ">' + txtContent +"    " +'</a>' + "Date: " + p1 +' <button onclick="deleteNote(this)">x</button>';;
    //date.innerHTML = "Date: " + p1 +' <button onclick="deleteNote(this)">x</button>';
    
   // Add to the DOM
  noteWithdate.append(note);
  notes.appendChild(noteWithdate);
  };



notesStorage.forEach(listBuilder);


const deleteNote = (btn) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
};


function EditNote (){


  document.getElementsByClassName("popup")[0].className = "popup shown";
   // document.getElementById("txtContent").value = notesStorage.innerHTML;

//noteInput.innerHTML = localStorage.getItem("notes");

}
  

function clearNote() {
 // window.location='http://www.example.com';
 localStorage.clear();
  //document.getElementById("demo").innerHTML = "Hello World";
}


