const poKeApi = {}

function convertPokeApitoPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    pokemon.types = types
    pokemon.type = types[0]
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

poKeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApitoPokemon)

}
poKeApi.getPokemons = (offset=0,limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(poKeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails)=> pokemonsDetails)
        .catch((error) => console.error(error))
}
