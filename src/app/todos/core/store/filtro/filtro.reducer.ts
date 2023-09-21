import { createReducer, on } from '@ngrx/store';

import { setFiltro } from './filtro.actions';
import { filtrosValidos } from '../../types/main.type';

export const estadoInicial: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(
  estadoInicial,
  on(setFiltro, (_, { filtro }) => filtro)
);
