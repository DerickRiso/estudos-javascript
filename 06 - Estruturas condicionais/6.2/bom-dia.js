var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 5) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}


var diasem = new Date()
var dia = diasem.getDay()
switch(dia) {
    case 0: 
        console.log("Domingo")
        break
    case 1: 
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
    console.log("Sábado")
    break
    default: 
        console.log("none")
        break
}