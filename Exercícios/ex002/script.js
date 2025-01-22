function verificar() {
    // Definição de datas e resultado
    var data = new Date()
    var ano = data.getFullYear() // Ano atual
    var anoNascimento = document.getElementById('txtano') // Ano de nascimento
    var res = document.getElementById("res")

    // Mensagem de erro
    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        alert("Verifique as informações!")
    } else {
        // Definição de gênero
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(anoNascimento.value)
        var genero = ""

        // Criação de uma tag img 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Definição das imagens por gênero e idade
        if (fsex[0].checked) {  // Homem
            genero = "Homem"
            if (idade < 15) {
                // criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade >= 50) {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {   // Mulher
            genero = "Mulher"
            if (idade < 15) {
                // criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade >= 50) {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }

        // Exibição dos resultados
    
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

