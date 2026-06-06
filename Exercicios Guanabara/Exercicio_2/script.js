function verificar() {
    const data = new Date()
 
    const anoAtual = data.getFullYear()
    const anoNascimento = document.getElementById('txtano').value
    const res = document.getElementById('res')
    const sexo = document.getElementsByName('radsex')

    if (anoNascimento.length === 0 || anoNascimento > anoAtual) {
        alert('Verifique os dados e tente novamente!')
        return
    }

    const idade = anoAtual - anoNascimento
    let genero = ''
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade <= 12) {
            img.src = 'imagens/bebehomem.jpg'
        } else if (idade <= 18) {
            img.src = 'imagens/jovemhomem.jpg'
        } else if (idade < 50) {
            img.src = 'imagens/homemadulto.jpg'
        } else {
            img.src = 'imagens/idoso.jpg'
        }
    } else {
        genero = 'Mulher'
        if (idade <= 12) {
            img.src = 'imagens/bebemulher.jpg'
        } else if (idade <= 18) {
            img.src = 'imagens/jovemmulher.jpg'
        } else if (idade < 50) {
            img.src = 'imagens/mulheradulta.jpg'
        } else {
            img.src = 'imagens/idosa.jpg'
        }
    }

    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
    res.appendChild(img)
}
