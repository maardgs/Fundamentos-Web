// var (variável de escopo global- determinado perímetro), let(escopo local), const (escopo global - constante - não muda) -> palavras reservadas;

/*
Case Sensitive = reconhece letras maiusculas e minusculas.
por Tag: getElementByTagName()
por Id: getElementById()**
por Nome: getElemntByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")

nome.style.width = "50%"
email.style.width = "50%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
    }
}

