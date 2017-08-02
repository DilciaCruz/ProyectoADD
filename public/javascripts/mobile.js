$("#splash").on('pagecreate',function(e){
  $.get(
    '/api/getLista',
    {},
    function(docs, scsTxt,xhrq){
      if(docs){
        var htmlStr ='';
        docs.map(function(doc,i){
          htmlStr += '<li><a href="#">' + doc.nombrepelicula + '</a></li>';
        });
        $('#splash_list').html(htmlStr).listview('refresh');
      }
    },
    'json'
  );
});


$("#itemCreate").on('pagecreate', function(e){
  $("#itemCreate-enviar").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    var formObject={};
    formObject.nombrepelicula = $("#itemCreate-txtNombrePelicula").val();
    formObject.numerosala = $("#itemCreate-txtNombre").val();
    formObject.fechafuncion = $("#itemCreate-dateFuncion").val();
    formObject.hora = $("#itemCreate-txtHora").val();
    formObject.formatopelicula = $("#itemCreate-txtFormato").val();
    formObject.Clasificacion = $("#itemCreate-txtClasificacion").val();
    formObject.nombrecompleto = $("#itemCreate-txtNombre").val();
    formObject.correo = $("#itemCreate-txtCorreo").val();
    formObject.Asientos = $("#itemCreate-txtAsientos").val();


    $.post("/api/createitem",
    formObject,
    function(response,txtscs,xhrq){
      if(response){
        alert('Documento isertado');
      }
    },
    'json'
  );
    console.log(formObject);



  });
});
