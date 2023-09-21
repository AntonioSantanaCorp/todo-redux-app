import { Component } from '@angular/core';

@Component({
  selector: 'todo-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> tareas pendientes</span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">Todas</a>
        </li>
        <li>
          <a href="#/active">Activos</a>
        </li>
        <li>
          <a href="#/completed">Completados</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Limpiar completados</button>
    </footer>
  `,
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent {}
