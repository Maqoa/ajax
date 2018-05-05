
$(function(){
    'use strict';
    
        
    function showData(arrData) {

    var html = "";
    arrData.forEach(function (elem, index) {
        html += "<p>Tytuł: <strong>" + elem.title + "</strong></p>";
    });
    document.body.innerHTML= html;
  $.getJSON("https://jsonplaceholder.typicode.com/posts", function(data){
              console.log(data);
              });
});