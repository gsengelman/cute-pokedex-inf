
const inputPokemon = document.getElementById("inputPokemon");
const bolaAzulPiscando = document.getElementById("bolaAzulPiscando")
const nomePokemon = document.getElementById("nomePokemon")
const imagemPokemon = document.getElementById("imagemPokemon")
const pesoPokemon = document.getElementById("pesoPokemon")
const alturaPokemon = document.getElementById("alturaPokemon")
const numeroPokemon = document.getElementById("numeroPokemon")
const fundoPokemon = document.getElementById("fundoPokemon")
const fundoInfo = document.getElementById("fundoInfo")
const telaProxPokemon = document.getElementById("telaProxPokemon")
const telaPokemonAnterior = document.getElementById("telaPokemonAnterior")
const tituloPesoPokemon = document.getElementById("tituloPesoPokemon")
const tituloAlturaPokemon = document.getElementById("tituloAlturaPokemon")

const pegaPokemon = () => {
    const referenciaIntervalo = setInterval(() => {
        bolaAzulPiscando.style.backgroundColor = bolaAzulPiscando.style.backgroundColor === "lightblue" ? "white" : "lightblue"
    }, 200);
    setTimeout(() => {
        clearInterval(referenciaIntervalo)
        bolaAzulPiscando.style.backgroundColor = "lightblue"
    }, 1000)
    fundoPokemon.style.backgroundImage = "url('/05-JavaScript/tarefa-pokedex/images/poke-fundo.png')";
    fundoInfo.style.backgroundImage = "url('/05-JavaScript/tarefa-pokedex/images/info-fundo.png')";
    telaProxPokemon.style.backgroundColor = "indianred"
    telaPokemonAnterior.style.backgroundColor = "indianred"
    tituloPesoPokemon.style.color = "rgb(255, 252, 223)"
    tituloAlturaPokemon.style.color = "rgb(255, 252, 223)"
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value}`)
        .then(response => response.json())
        .then(pokemon => {
            nomePokemon.innerHTML = pokemon.name
            imagemPokemon.src = pokemon.sprites.front_default
            pesoPokemon.innerHTML = pokemon.weight
            alturaPokemon.innerHTML = pokemon.height
            numeroPokemon.innerHTML = pokemon.id
        })
    if (inputPokemon.value > 1) {
        pegaPokemonAnterior()
    }
    if (inputPokemon.value < 898) {
        pegaProxPokemon()
    }

    inputPokemon.value = ""
}

const nomeProxPokemon = document.getElementById("nomeProxPokemon")
const numeroProxPokemon = document.getElementById("numeroProxPokemon")

const pegaProxPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Number(inputPokemon.value) + 1}`)
        .then(response => response.json())
        .then(pokemon => {
            nomeProxPokemon.innerHTML = pokemon.name
            numeroProxPokemon.innerHTML = pokemon.id
        })
}

const nomePokemonAnterior = document.getElementById("nomePokemonAnterior")
const numeroPokemonAnterior = document.getElementById("numeroPokemonAnterior")

const pegaPokemonAnterior = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Number(inputPokemon.value) - 1}`)
        .then(response => response.json())
        .then(pokemon => {
            nomePokemonAnterior.innerHTML = pokemon.name
            numeroPokemonAnterior.innerHTML = pokemon.id
        })
}
