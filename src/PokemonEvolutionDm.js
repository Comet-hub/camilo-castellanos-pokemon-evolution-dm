import { LitElement } from 'lit-element';
export class PokemonEvolutionDm extends LitElement {
  async searchForEvolutions(chain) {
    const specieData = await this.fetchSpecies(chain.species.url);
    const pokemonData = await this.fetchPokemon(specieData.id);

    let acc = {
      ...pokemonData,
      evolves_to: [],
    };

    if (chain.evolves_to.length) {
      for (const poke of chain.evolves_to) {
        acc.evolves_to.push(await this.searchForEvolutions(poke));
      }
      return acc;
    } else {
      return acc;
    }
  }
  async fetchSpecies(url) {
    const speciesRes = await fetch(url);
    const speciesData = await speciesRes.json();
    return speciesData;
  }

  async fetchPokemon(id) {
    const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = await pokemonRes.json();
    return pokemonData;
  }
}
