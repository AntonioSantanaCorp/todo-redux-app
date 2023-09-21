import { Record } from 'immutable';

// export class Todo extends Record({}) {
//   public id: number = new Date().getTime();
//   public completado: boolean = false;

//   constructor(public texto: string = '') {
//     super();
//   }
// }
export class Todo extends Record({
  id: 0,
  completado: false,
  texto: '',
}) {
  constructor(texto: string = '') {
    super({ id: Math.random(), texto });
  }
}
