const botaoSortear = document.querySelector("div.box button")
var roleta = []

for (i = 0; i <= 50; i++) {
    roleta.push(i)
}

function calcular() {
    document.getElementById("trocar-texto").innerHTML = 'O número sorteado foi: <br>' + roleta[Math.floor(Math.random() * roleta.length)];
    document.getElementById("trocar-texto").style.color = "rgb(80,80,80)";
}



function sortearNome() {
    var nome = [
        "João", "Elaine", "Adelson", "Enrique", "Gabriel", "Guilherme", "Andrey", "Gustavo", "Vitor", "Victor", "Pedro", "Sarah", "Tamires", "Mariane",
        "Paulo", "Bruno", "Andrews", "Eduardo", "Larissa", "Manuela", "Ana", "Júlia", "Beatriz", "Murilo", "Heloisa", "Julio", "Erick", "Geovana", 
        "Giovana", "Fernando", "Tomaz", "Matheus", "Uewerton", "Juan", "Nair", "Eliel", "Alan", "Daniel", "Danilo", "Rafael", "Raphael"
    ]
    var nomeSorteado = roleta[Math.floor(Math.random() * roleta.length)]

    for (i = 0; i <= 40; i++) {
        if (nomeSorteado == i) {
            document.getElementById("trocar-texto").innerHTML = 'O nome sorteado foi: <br>' + nome[i];
            document.getElementById("trocar-texto").style.color = "rgb(80,80,80)";
            console.log(nome[i])
        }
    }
}



function sortearCor() {
    var nome = [
        "Azul", "Vermelho", "Branco", "Preto", "Amarelo", "Lilaz", "Roxo", "Cinza", "Laranja", "Marrom", "Violeta", "Verde", "Bege", "Carmim",
        "Pardo", "Púrpura", "Rosa", "Salmão", "Tangerina", "Turquesa", "Naval", "Magneta", "Lemon", "Lilás", "Kiwi", "Jade", "Esmeralda", "Dourado", 
        "Lima", "Marfim", "Tomaz", "Neve", "Orquídea", "Juan", "Oliva", "Ouro", "Prata", "Pêssego", "Tomate", "Zaffre", "Urucum"
    ]
    var nomeSorteado = roleta[Math.floor(Math.random() * roleta.length)]

    for (i = 0; i <= 40; i++) {
        if (nomeSorteado == i) {
            document.getElementById("trocar-texto").innerHTML = 'A cor sorteada é: <br>' + nome[i];
            document.getElementById("trocar-texto").style.color = "rgb(80,80,80)";
            console.log(nome[i])
        }
    }
}