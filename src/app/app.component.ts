import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { Post } from './models/post.model';
import * as PostActions from './reducers/post.actions';

interface AppState {
  message: string;
}

// interface AppState {
//   post: Post;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myFirstNgrxApp';
  message$: Observable<string>;

  // post: Observable<Post>;
  text: string = '';

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  // constructor(private store: Store<AppState>) {
  //   this.post = this.store.select('post');
  // }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }
  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  // editText() {
  //   this.store.dispatch(new PostActions.EditText(this.text));
  // }
}
