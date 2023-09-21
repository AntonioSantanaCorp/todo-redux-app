import { List } from 'immutable';
import { Todo } from './todos/core/models/main.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/core/store/todos/todo.reducers';
import { filtrosValidos } from './todos/core/store/filtro/filtro.actions';
import { filtroReducer } from './todos/core/store/filtro/filtro.reducer';

export interface AppState {
  todos: List<Todo>;
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
