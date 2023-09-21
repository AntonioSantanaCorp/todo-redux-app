import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: ` <todo-page></todo-page>
    <app-footer></app-footer>`,
})
export class AppComponent {}
