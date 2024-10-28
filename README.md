# @pokedex/pokemon-evolution-dm

## Package info

### Package installation

Installation using NPM

```bash
npm install @pokedex/pokemon-evolution-dm
```

## PokemonEvolutionDm (Class) pokemon-evolution-dm (Custom Element)

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { PokemonEvolutionDm } from '@pokedex/pokemon-evolution-dm';

class ExampleElement extends PokemonEvolutionDm {
  ...
}
```

Use the custom element (defined globally):

```js
import '@pokedex/pokemon-evolution-dm/pokemon-evolution-dm.js';
```

```html
<pokemon-evolution-dm ...> ... </pokemon-evolution-dm>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component allows access to the pokemon belonging to the given evolutionary chain through the pokeapi

Example:

```html
<pokemon-evolution-dm></pokemon-evolution-dm>
```
