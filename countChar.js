
let myText = document.getElementById("txtContent");
let wordCount = document.getElementById("wordCount");

myText.addEventListener("keyup",function(){
	
    let characters = myText.value.split('');
    wordCount.innerText = characters.length;
    //This will not account white space characters
 /*   wordCount.innerText = characters.filter( item => {
      return (item != ' ');
  }).length; */
});