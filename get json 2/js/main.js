$(function(){
    'use strict';
    
    
    var ajaxUrl = "https://jsonplaceholder.typicode.com/posts";
    
    $.ajax({
        url: ajaxUrl,
        dataType: "json",
        success: function(response){
            console.log(response);
        },
    });
});


