function login(form){
    if (form.u.value=="pedro") {
        if (form.c.value=="123") {
            location="principal.html";
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario")
    }
}

function formula() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
    document.getElementById('C2').value=(Cantidad2+CantidadT);
}
function formula2() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
    document.getElementById('C2').value=(Cantidad2-CantidadT);
}
function formula3() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);   
}
function formula4() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C2').value=(Cantidad2+CantidadT);
}
function formula5() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
}
function formula6() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C2').value=(Cantidad2-CantidadT);
}