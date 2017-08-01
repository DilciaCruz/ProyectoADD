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
