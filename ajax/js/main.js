'use strict'

function showData(arrData) {

    var html = "";
    arrData.forEach(function (elem, index) {
        html += "<p>Tytuł: <strong>" + elem.title + "</strong></p>";


        //       console.log(elem.title); 
        //       console.log("==============="); 
    });
    document.body.innerHTML= html;
}






function ajax(method, url) {


    //tworze obiekt xmlhttpreques
    var httpRequest = new XMLHttpRequest();
    console.log(httpRequest);

    //otwieram polaczenie
    httpRequest.open(method, url);
    //sprawdzamy status zdarzenie zmiany statusu polaczenia
    httpRequest.addEventListener('readystatechange', function () {


        //jesli readdystate ==4 - dane zwrocone i gotowe do uzycia

        if (httpRequest.readyState == 4) {
            //sprawdaamy kod statusu odpowiedzi 200 dobrze, iinczej zle

            if (httpRequest.status == 200) {
                var data = httpRequest.responseText;
                var jsonData = JSON.parse(data);

                //pobieranie jednego okreslonego elementu  - petle jesi wiecej elementow



                showData(jsonData);

            }

        }
    })

    httpRequest.send();
}


ajax('GET', "https://jsonplaceholder.typicode.com/posts");