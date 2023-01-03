function logar() {
     var login = document.getElementById('login').value
     var password = document.getElementById('password').value

     if (login === "digodev" && password === "1122abc"){
        alert ("Você está sendo direcionado ao meu perfil do GitHub")
        location.href = "https://github.com/digaogalo"
     } else {
        alert('Usuário ou senha incorretos')
     }
}