const poke_conatainer = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#EE8130',
        grass: '#7AC74C',
        eletric: '#F7D02C',
        water: '#6390F0',
        ground: '#E2BF65',
        rock: '#B6A136',
        fairy: '#D685AD',
        poison: '#A33EA1',
        bug: '#A6B91A',
        dragon: '#6F35FC',
        psychic: '#F95587',
        flying: '#A98FF3',
        fighting: '#C22E28',
        normal: '#A8A77A',
        ice: '#96D9D6',
        ghost: '#735797',
        dark: '#705746',
        steel: '#B7B7CE',
}

const fetchPokemons =async() =>{
    for(let i =1 ;i <= pokemon_count;i++){
        await getpokemon(i)
    }
}

const getpokemon =async(id) =>{
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()

    createPokemonCard(data)
    console.log(data)
}

const createPokemonCard =(pokemon) =>{
    const pokemonEL = document.createElement('div')
    pokemonEL.classList.add('pokemon')
    
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice()

    const pokemonInnerHtml =`
    <div class="img-container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
            </div>

            <div class="info">
                <span class="number">#001</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type : <span>grass</span></small>
            </div>
    `
    pokemonEL.innerHTML =pokemonInnerHtml

    poke_conatainer.appendChild(pokemonEL)
}
fetchPokemons()