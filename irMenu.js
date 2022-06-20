//Função para logar e cadastrar pra ir ao menu

function verificar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    

     if( !nome || !email || !senha){
        alert("Campos não preenchidos, favor preencê-los");
    } else{
        window.location.href="menu.html";    
    }
}

function verificar2(){
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value;
    

     if( !Email || !Senha){
        alert("Campos não preenchidos, favor preencê-los");
    } else{
        window.location.href="menu.html";    
    }
}