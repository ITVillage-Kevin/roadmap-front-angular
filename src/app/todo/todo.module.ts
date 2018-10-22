import {NgModule} from '@angular/core';
import {TodoRegisterComponent} from './todo-register/todo-register.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo.component';
import {TodoService} from '../todo.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent,
    TodoListComponent
  ],
  exports: [
    TodoComponent,
    TodoRegisterComponent,
    TodoListComponent
  ],
  providers: [
    TodoService
  ],
})
export class TodoModule {}
