import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello world', action: Action) {
  console.log('action type', action.type, 'state', state);

  switch (action.type) {
    case 'SPANISH':
      return (state = 'Hola Mundo');

    case 'FRENCH':
      return (state = 'Bonjour Le monde');

    default:
      return state;
  }
}
