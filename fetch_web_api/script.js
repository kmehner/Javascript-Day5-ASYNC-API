// Where the magic happens

// Fetching data from the PokeAPI where the pokemonName is the name of the pokemon we want to fetch
async function fetchPokemonData(pokemonName) {

  // First we fetch the data from the pokemon API
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  // Then we convert the response to JSON
  const pokemonData = await response.json();

  // Finally we return the data
  return pokemonData;
}

// After we gave fetched the data, we can display it on the page
document.addEventListener('DOMContentLoaded', async () => {

  // Fetching Pikachu data (you can change this to any pokemon you want to fetch data for)
  const pikachuData = await fetchPokemonData('pikachu');

  // Getting the element where we want to display the pokemon data
  const pokemonInfoElement = document.getElementById('pokemon-info');

  // Updating the element with the pokemon
  pokemonInfoElement.innerHTML = `
      <h2>${pikachuData.name}</h2>
      <img src="${pikachuData.sprites.front_default}" alt="${pikachuData.name}">
      <h3>Abilities:</h3>
      <ul>
          ${pikachuData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
      </ul>
      <h3>Base Experience:</h3>
      <p>${pikachuData.base_experience}</p>
  `;
});