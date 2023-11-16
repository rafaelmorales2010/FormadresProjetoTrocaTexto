function trocaTexto(){
    //document.querySelector serve para interagir e selecionar html com javascript
    let d1 = document.querySelector("#d1");//usando Hashtag para id
    let d2 = document.querySelector("#d2");
    let d3 = document.querySelector("#d3");

    //innerHTML inseri novos elementos e um elemento ja existente ou seja mostra na página html
    d1.innerHTML = "Javascript é poderoso";
    d2.innerHTML = "Curso formadores";
    d3.innerHTML = "professor: Rafael Morales";
}

//trocaTexto();
/*
function media(n1,n2,n3,n4){
    let result = document.querySelector(".resultado");
  

    result.innerHTML = (n1 + n2 + n3 +n4)  /4;
 
}

media(70,70,70,80); */
