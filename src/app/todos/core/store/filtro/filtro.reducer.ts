import { createReducer, on } from '@ngrx/store';

import { filtrosValidos, setFiltro } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'completados';

export const filtroReducer = createReducer<filtrosValidos>(
  estadoInicial,
  on(setFiltro, (_, { filtro }) => filtro)
);
