var enviar = document.getElementById("enviar")
enviar.addEventListener('click', calcular)

function calcular() {
    var entrada = document.getElementById("vel").value
    var vel = entrada

    if(vel > 60) {
        document.getElementById("res").innerHTML = `Você passou da velocidade permitida (${vel} Km/h), multado.`  
    } else {
        document.getElementById("res").innerHTML = `Você passou dentro da velocidade permitida (${vel} Km/h)`
    }

    document.getElementById("frase").innerHTML = "Use cinto de segurança"
} 
