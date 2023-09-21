import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../core/store/todos/todo.actions';

@Component({
  selector: 'todo-add',
  template: `
    <input
      class="new-todo"
      placeholder="¿Que quieres hacer?"
      autofocus
      [formControl]="txtInput"
      (keyup.enter)="agregar()"
    />
  `,
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  private store: Store<AppState> = inject(Store);
  protected txtInput: FormControl;

  constructor() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregar() {
    if (this.txtInput.invalid) return;

    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));

    this.txtInput.reset();
  }
}
