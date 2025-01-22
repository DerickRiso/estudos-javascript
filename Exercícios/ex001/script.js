function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var cumprimento

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#798561'
        cumprimento = "Bom dia!"    
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#869BAA'
        cumprimento = "Boa tarde!"
    } else if (hora >= 18 && hora < 24) {
        img.src = 'noite.png'
        document.body.style.background = '#010101'
        cumprimento = "Boa noite!"
    } else {
        alert("Como você fez isso?")
        msg.innerHTML = 'Impossível...'
        cumprimento = "LOCALIZAÇÃO REGISTRADA"
    }
    msg.innerHTML = `Agora são ${hora} horas. ${cumprimento}`
}
