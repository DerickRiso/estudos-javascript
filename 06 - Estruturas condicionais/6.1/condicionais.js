var entrada = document.getElementById("vel").value
var vel = Number(entrada)
var enviar = document.getElementById("enviar")
enviar.addEventListener('click', calcular)



function calcular() {
    if(vel > 60) {
        document.getElementById("res").innerHTML = `Você passou da velocidade permitida (${vel} Km/h), multado.`
        alert("OBa")
        
    }
} 
