import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../core/models/main.model';
import { List } from 'immutable';
import { filtrosValidos } from '../core/types/main.type';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    todos: List<Todo> | null,
    filtro: filtrosValidos | null
  ): List<Todo> {
    const newTodos = todos || List([]);

    switch (filtro) {
      case 'completados':
        return newTodos.filter(({ completado }) => completado);
      case 'activos':
        return newTodos.filter(({ completado }) => !completado);
      default:
        return newTodos;
    }
  }
}
