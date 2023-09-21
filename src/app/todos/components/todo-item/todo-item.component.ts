import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../core/models/main.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'todo-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li [class.completed]="todo.completado" [class.editing]="editando">
      <div class="view">
        <input class="toggle" type="checkbox" [formControl]="chkCompletado" />
        <label (dblclick)="editar()"> {{ todo.texto }}</label>
        <button class="destroy" (click)="borrar()"></button>
      </div>
      <input
        type="text"
        class="edit"
        #input
        [formControl]="txtInput"
        (blur)="terminarEdicion()"
      />
    </li>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @ViewChild('input')
  private inputText!: ElementRef<HTMLInputElement>;

  protected chkCompletado!: FormControl;

  protected txtInput!: FormControl;

  protected editando = false;

  @Input()
  public todo!: Todo;

  @Output()
  public toggleCompletado = new EventEmitter<number>();

  @Output()
  public editarTodo = new EventEmitter<Partial<Todo>>();

  @Output()
  public borrarTodo = new EventEmitter<number>();

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    //Subscriptions
    this.chkCompletado.valueChanges.subscribe(() =>
      this.toggleCompletado.emit(this.todo.id)
    );
  }

  protected editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => this.inputText.nativeElement.select());
  }

  protected terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto)
      return;

    this.editarTodo.emit({ id: this.todo.id, texto: this.txtInput.value });
  }

  protected borrar() {
    this.borrarTodo.emit(this.todo.id);
  }
}
