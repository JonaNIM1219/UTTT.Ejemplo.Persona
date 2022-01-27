function saludar() {
    alert("Hola mundo desde fichero js")
}

//Aqui consumes una api
async function getData() {
    var txtNombre = document.getElementById("txtNombre");
    var Image1 = document.getElementById("Image1");
    var resp = await fetch("https://api.github.com/users/JonaNIM1219");
    var data = await resp.json();
    txtNombre.value = data.login;
    Image1.setAttribute("src", data.avatar_url);
}