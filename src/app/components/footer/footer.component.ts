import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.css'],
  template: `<footer class="info">
    <p>Doble click para editar un TODO</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="http://todomvc.com">you</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>`,
})
export class FooterComponent {}
