import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FILTROS } from '../../core/constants/todo-footer.constant';
import { filtrosValidos } from '../../core/types/main.type';
import { setFiltro } from '../../core/store/filtro/filtro.actions';
import { map } from 'rxjs';
import { limpiarTodos } from '../../core/store/todos/todo.actions';

@Component({
  selector: 'todo-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"
        ><strong>{{ pendientes$ | async }}</strong> tareas pendientes</span
      >
      <ul class="filters">
        <li *ngFor="let filtro of filtros">
          <a
            [class.selected]="filtro == (filtroActual$ | async)"
            (click)="cambiarFiltro(filtro)"
          >
            {{ filtro | titlecase }}
          </a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button
        type="button"
        class="clear-completed"
        (click)="limpiarCompletados()"
      >
        Limpiar completados
      </button>
    </footer>
  `,
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent {
  private store: Store<AppState> = inject(Store);

  protected filtros = FILTROS;

  protected filtroActual$ = this.store.select('filtro');

  protected pendientes$ = this.store
    .select('todos')
    .pipe(map((todos) => todos.count(({ completado }) => !completado)));

  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarTodos());
  }
}
