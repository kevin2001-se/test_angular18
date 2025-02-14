import { Routes } from '@angular/router';
import { pokemonRoutes } from './pokemon/pokemon.routes';
import { ComercialRoutes } from './modulos/comercial/comercial.routes';

export const routes: Routes = [
  ...pokemonRoutes,
  ...ComercialRoutes
];
