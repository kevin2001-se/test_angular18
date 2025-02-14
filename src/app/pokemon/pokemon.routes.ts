import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

export const pokemonRoutes: Routes = [
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon.component').then(c => c.PokemonComponent)
  }
];
