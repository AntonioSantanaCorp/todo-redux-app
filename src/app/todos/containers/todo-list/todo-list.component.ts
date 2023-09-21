import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/models/main.model';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { borrar, editar, toggle } from '../../core/store/todos/todo.actions';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="todo-list">
      <todo-item
        *ngFor="let todo of todos$ | async"
        [todo]="todo"
        (toggleCompletado)="onToggleCompletado($event)"
        (editarTodo)="onEditarTodo($event)"
        (borrarTodo)="onBorrarTodo($event)"
      >
      </todo-item>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  private store: Store<AppState> = inject(Store);

  protected todos$ = this.store.select('todos');

  onToggleCompletado(id: number) {
    this.store.dispatch(toggle({ id }));
  }

  onEditarTodo(todo: Partial<Todo>) {
    this.store.dispatch(editar({ id: todo.id!, texto: todo.texto! }));
  }
  
  onBorrarTodo(id: number) {
    this.store.dispatch(borrar({ id }));
  }
}
