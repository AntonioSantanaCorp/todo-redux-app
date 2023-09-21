import { createAction, props } from '@ngrx/store';
import { filtrosValidos } from '../../types/main.type';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
