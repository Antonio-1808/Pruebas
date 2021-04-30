function validar()
{
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if(usuario == "Jhonny@gmail.com" && Contraseña == "12345")
    {
        alert("Gmail y Contraseña Validos")
        window.open('Paginas/usuario/index.html');
    }
    else
    {
        alert("verifique sus datos");
    }
}