import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todo-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <todo-add></todo-add>
      </header>

      <section class="main">
        <todo-toggle-all></todo-toggle-all>

        <todo-list></todo-list>
      </section>

      <todo-footer></todo-footer>
    </section>
  `,
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {}
