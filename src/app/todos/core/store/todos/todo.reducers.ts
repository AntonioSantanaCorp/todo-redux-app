import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiarTodos,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from '../../models/main.model';
import { List } from 'immutable';

export const estadoInicial: List<Todo> = List([
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capital America'),
]);

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => state.push(new Todo(texto))),
  on(toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? todo.set('completado', !todo.completado) : todo
    )
  ),
  on(editar, (state, { id, texto }) =>
    state.map((todo) => (todo.id === id ? todo.merge({ id, texto }) : todo))
  ),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completado }) =>
    state.map((todo) => todo.set('completado', completado))
  ),
  on(limpiarTodos, (state) => state.filter(({ completado }) => !completado))
);
