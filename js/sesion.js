const usuarios = [
    {user: 'luis', password: '123'},
    {user: 'maria', password: '456'},
];
function inicioSesion(){
    //prevenir el envio del formulario si se llama desde subir
    if(event)event.preventDefault();
    let usu = document.getElementById('usu').value;
    let pass = document.getElementById('pass').value;

    let verifica = !!usuarios.find(e =>e.user==usu && e.password==pass);

    if(verifica){
        alert("usuario correcto...!!!");
        window.location.href="pages/inicio.html";
    }
    else{
        alert("usuario o password incorecto...!!!");
    }
}