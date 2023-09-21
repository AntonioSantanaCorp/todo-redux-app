import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../../core/store/todos/todo.actions';

@Component({
  selector: 'todo-toggle-all',
  template: `
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      (click)="toggleAll()"
    />
    <label for="toggle-all">Mark all as complete</label>
  `,
  styleUrls: ['./todo-toggle-all.component.css'],
})
export class TodoToggleAllComponent {
  private store: Store<AppState> = inject(Store);
  protected completado: boolean = false;

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({ completado: this.completado }));
  }
}
