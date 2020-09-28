$(document).ready(function(){
 // creare to do list
 $.ajax(
   {
     "url":  "http://157.230.17.132:3003/todos",
      "method": "GET",
      "success": function (data) {
     // invoco funzione per il template
      console.log(data);
      renderList(data);

    },
      "error": function () {
       alert("E' avvenuto un errore. " );
    }
   }
 );
 // fine chiamata ajax
});

// creare funzione crearzione template
function renderList(data){
  var source = $("#list-template").html();
  var template = Handlebars.compile(source);

  for (i=0; i<=data.length; i++){
    console.log(data[i].text);
  }
    // console.log(data[i].text);
}
