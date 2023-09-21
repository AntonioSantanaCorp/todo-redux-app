import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './containers/todo-add/todo-add.component';
import { TodoFooterComponent } from './containers/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoToggleAllComponent } from './containers/todo-toggle-all/todo-toggle-all.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoToggleAllComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
