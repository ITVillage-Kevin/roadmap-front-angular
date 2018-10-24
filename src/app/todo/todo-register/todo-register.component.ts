import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.css']
})
export class TodoRegisterComponent implements OnInit {
  todoRegiterFormModel: FormGroup = new FormGroup({
    'todoName': new FormControl('', Validators.required),
    'todoDate': new FormControl('', Validators.required)
  });
  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  registerTodo() {
    if (this.todoRegiterFormModel.valid) {
      this.todoService.registerTodo(this.todoRegiterFormModel.value)
        .subscribe(result => {
          this.todoService.registerTodoEvent.emit(result);
        });
    }
  }
}
