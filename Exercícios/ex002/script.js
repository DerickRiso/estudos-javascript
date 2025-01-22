function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Ano atual
    var anoNascimento = document.getElementById('txtano') // Ano de nascimento
    var res = document.getElementById("res")

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        alert("Verifique as informações!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(anoNascimento.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = "Homem"
        } else if (fsex[1].checked) {
            genero = "Mulher"
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}

