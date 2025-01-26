function contar() {
    var numInicial = document.getElementById("icomeco")
    var intervalo = document.getElementById("iintervalo")
    var numFinal = document.getElementById("ifinal")

    var res = document.getElementById("res")

    var num1 = Number(numInicial.value) 
    var intrvl = Number(intervalo.value)
    var num2 = Number(numFinal.value)

    if(intrvl == 0) {
        alert("Insira um valor válido!")
    }

    for(let i = num1; i <= num2 ;i += intrvl) {
        
        res.innerHTML += `\u{1F600}${i}, `
    }
    
}
