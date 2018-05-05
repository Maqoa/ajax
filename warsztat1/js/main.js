'use strict'
var btn = document.getElementById('get');
var output = document.getElementById('output');

function pobierzDane(data){
   ajax('GET', "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl")
}

function ajax(method, url) {

    var httpRequest = new XMLHttpRequest();
    console.log(httpRequest);

    httpRequest.open(method, url);
    
    httpRequest.addEventListener('readystatechange', function () {


        if (httpRequest.readyState == 4) {
           

            if (httpRequest.status == 200) {
                var data = httpRequest.responseText;
                output.innerHTML = data;

            }

        }
    })

    httpRequest.send();
}

btn.addEventListener('click', pobierzDane);
