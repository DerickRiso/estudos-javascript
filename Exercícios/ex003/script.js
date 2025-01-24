function contagem() {
    var numInicial = document.getElementById("icomeco")
    var intervalo = document.getElementById("iintervalo")
    var numFinal = document.getElementById("ifinal")

    var res = document.getElementById("res")

    var num1 = Number(numInicial.value) 
    var intrvl = Number(intervalo.value)
    var num2 = Number(numFinal.value)
    const cont = []

    for(num1; num1 <= num2 ;num1 += intrvl) {
        // função push() posiciona item no array
        cont.push(num1)
    }

    // função join() transforma array em string
    // console.log(cont.join(", "))

    res.innerHTML = `<p>${cont.join(", ")}</p>`
}
