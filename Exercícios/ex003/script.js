function contagem() {
    var numInicial = document.getElementById("icomeco")
    var intervalo = document.getElementById("iintervalo")
    var numFinal = document.getElementById("ifinal")

    var res = document.getElementById("res")

    var num1 = Number(numInicial.value) 
    var intrvl = Number(intervalo.value)
    var num2 = Number(numFinal.value)

    for(num1; num1 <= num2 ;num1 += intrvl) {
        res.innerHTML = `<p>${num1}</p>`
        res.appendChild.innerHTML = `<p>${num1}</p>`
    }
}
