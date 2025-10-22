let alunos = [
    "Agatha Iasmin Koschel do Nascimento", "Ana Clara Furtado Goudinho", "Arthur Alexandre Abbruzzini", "Arthur Luiz Beccari", "Arthur Marcos Serpa Martins", "Arthur Soglia Veronica", "Artur Ximendes Del Guerso", "Augusto Gonçalves Dias", "Brenda Julya de Souza Freitas da Silva", "Bryan Prinz da Silva", "Daniel Domingos Pereira", "Davi Schoenardie de Almeida", "Eduardo Corrêa da Cruz", "Eric D. Scapini", "Érick Miguel Schuck", "Francisco Lisboa da Silva Lima", "Giovanni Filipe Burgo", "Guilherme Tomaz Silva", "Helena Neis da Silva", "João Francisco Luchtenberg Ventura", "João Paulo Fagundes", "João Victor de Abreu Cunha", "João Vitor Galiotto de Souza", "João Vitor Santos", "Jonas Luiz Marin", "Lucas Pereira", "Manuela Cristina Torres Guimarães", "Mateus Queiroz Logrado", "Mateus Zandona Krieger", "Nicollas Jose Prim", "Nicollas Lopes do Nascimento", "Pedro Rafael Santiago", "Ruan Geraldo", "Vinícius de Bona Ruas", "Yan Bueno Goulart",
];

let codAlunos = [
    "/assets/img/alunoNA.png", "/assets/img/aluno1.png", "/assets/img/aluno2.png", "/assets/img/aluno3.png", "/assets/img/aluno4.png", "/assets/img/aluno5.png", "/assets/img/aluno6.png", "/assets/img/aluno7.png", "/assets/img/aluno8.png", "/assets/img/aluno9.png", "/assets/img/aluno10.png", "/assets/img/aluno11.png", "/assets/img/aluno12.png", "/assets/img/aluno13.png", "/assets/img/aluno14.png", "/assets/img/aluno15.png", "/assets/img/aluno16.png", "/assets/img/aluno17.png", "/assets/img/aluno18.png", "/assets/img/aluno19.png", "/assets/img/aluno20.png", "/assets/img/aluno21.png", "/assets/img/aluno22.png", "/assets/img/aluno23.png", "/assets/img/aluno24.png", "/assets/img/aluno25.png", "/assets/img/aluno26.png", "/assets/img/aluno27.png", "/assets/img/aluno28.png", "/assets/img/aluno29.png", "/assets/img/aluno30.png", "/assets/img/aluno31.png", "/assets/img/aluno32.png", "/assets/img/aluno33.png", "/assets/img/aluno34.png"
];

window.addEventListener('load', () => {
    let lista = document.getElementById('alunos')

    for (let i = 0; i < alunos.length; i++) {
        lista.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
    }
})

document.getElementById('gerarGIF').addEventListener('click', ()=> {
    let salvarIdAluno = 0
    let salvarAluno = ''

    for(let i = 0; i < alunos.length; i++) {
        if(document.getElementById('aluno').value == alunos[i]) {
            salvarIdAluno = i
            salvarAluno = document.getElementById('aluno').value
        }
    }
    
    let image = document.createElement('img')
    image.setAttribute('src', codAlunos[salvarIdAluno])
    image.setAttribute('alt', salvarAluno)
    image.style.height = 'auto'
    image.style.width = '100%'
    image.style.position = 'relative'
    
    document.getElementById('aniversariante').remove()
    
    let div = document.createElement('div')
    div.style.backgroundColor = 'red'
    div.style.display = 'flex'
    div.style.width = '30%'
    
    div.appendChild(image)
    
    let confete = document.createElement('img')
    confete.setAttribute('src', '/assets/img/confete.gif')
    confete.style.position = 'absolute'
    confete.style.height = 'auto'
    confete.style.width = '30%'
    
    div.appendChild(confete)
    
    let letra = document.createElement('img')
    letra.setAttribute('src', '/assets/img/feliz_aniversario.svg')
    letra.style.position = 'absolute'
    letra.style.marginTop = '20px'
    letra.style.width = '30%'
    

    div.appendChild(letra)

    document.querySelector('body').appendChild(div)
})