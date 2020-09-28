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
    var context = {
    "text": data[i].text
  };
  var html = template(context);
  $("#list-template").append(html);
  }

}
