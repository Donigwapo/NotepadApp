
let txtContent = document.getElementById('txtContent');
let txtShow = document.getElementById('txtContent2');
let notes2 = document.getElementById('notes');
if (sessionStorage.getItem('reloaded') != null) {
   
       if (localStorage['notePad']) {
           if (localStorage['notePad']) {
   $("textarea[name='notePad']").val(localStorage['notePad']);
   //$("input[name='notePad2']").val(localStorage['notePad']);
 
  
 
          
   }
   
   }
   } else {  
    
$("textarea[name='notePad']").val(localStorage['notePad']);
//$("input[name='notePad2']").val(localStorage['notePad']);

}


   
    $(".txtContent").on("change",function () {
   localStorage.setItem($(txtContent).attr("name") , $(this).val());
 // localStorage.setItem($(txtShow).attr("name") , $(this).val());
 
   });

 