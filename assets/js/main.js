const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 5;
let offset = 0;
const maxPokemons = 151;



function convertPokemonTypesLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){

    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${String(pokemon.number).padStart(3,'0')}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadMorePokemons(offset, limit) {
    poKeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxPokemons) {
        const newLimit = maxPokemons - offset
        loadMorePokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadMorePokemons(offset, limit)
    }
})


// FETCH retorna promise que é uma promessa de um resultado, ou seja, qnd executar a busca vai receber o response se der tudo certo


