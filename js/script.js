$(document).ready(function(){
 // creare to do list
 $.ajax(
   {
     "url":  "http://157.230.17.132:3003/todos",
      "method": "GET",
      "success": function (data) {
     // invoco funzione per il template
      // stampa lista
      renderList(data);
    },
      "error": function () {
       alert("E' avvenuto un errore. " );
    }
   }
 );
 // fine chiamata ajax


// aggiungere un elemento alla lista
$("#btn").click(function(){
  var  newElement = $(".add_to_list").val();
  $.ajax(
    {
      "url":  "http://157.230.17.132:3003/todos",
       "method": "POST",
       "data": {
        "text": newElement,
       },
       "success": function (data) {
       addElement(data);

     },
       "error": function () {
        alert("E' avvenuto un errore. " );
     }
    }
  );
  // fine chiamata ajax per aggiungere
});

// rimuovere elemento dal video  e dall api
$("#list-to-do").on("click", ".lista", function(){
   var elemento =$(this);
   var attribute =elemento.attr("data-id");

  // eliminare dall api
  $.ajax(
    {
      "url":  "http://157.230.17.132:3003/todos/"+attribute,
      "method": "DELETE",
      "success": function (data) {
      elemento.remove();

    },
      "error": function () {
       alert("E' avvenuto un errore. " );
    }

    }
  );

});

// modificare l api
$(document).on("click", ".change", function(){
  
});


// fine ajax per aggiungere
});

// creare funzione crearzione template
function renderList(data){
  var source = $("#list-template").html();
  var template = Handlebars.compile(source);

  for (i=0; i<data.length; i++){
    var context = {
    "text": data[i].text,
    "id": data[i].id
  };
  var html = template(context);
  $("#list-to-do").append(html);
  }

}
//  fine funzione

// funzione per aggiungere un elemento
function addElement(data){
  var source = $("#list-template").html();
  var template = Handlebars.compile(source);

  var context = {
  "text": data.text,
  "id": data.id
  }
  var html = template(context);
  $("#list-to-do").append(html);

}
// fine funzione
