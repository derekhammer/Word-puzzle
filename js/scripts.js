$(function() {

$("#submit").click(function(){
  var wordPuzzle= $("input#word").val();
  var arrays = wordPuzzle.split("");
  var output = [];
  arrays.forEach(function(letter){
    if ((letter==="a")||(letter==="e")||(letter==="i")||(letter==="o")||(letter==="u")){
      output.push("-");
    } else {
      output.push(letter);
    }
  });
  $("#formOne").hide();
   var total= output.join("");
  $("#output").text(total);
});
});
