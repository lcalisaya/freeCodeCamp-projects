//AJAX: Asynchronous JavaScript and XML

function  loadDoc() {
  var xhttp= new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('demo').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET",
"https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
xhttp.send();
}

/*
Cuando se agrega "https://cors-anywhere.herokuapp.com/" se previene del siguiente error:

XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt.
No 'Access-Control-Allow-Origin' header is present on the requested resource.
Origin 'https://s.codepen.io' is therefore not allowed access.
*/
