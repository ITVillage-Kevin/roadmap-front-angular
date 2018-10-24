import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoData: Array<object> = [];
  constructor(private todoService: TodoService) {
    this.todoService.registerTodoEvent.subscribe(data => {
      console.log(data);
      this.todoData.push(data);
    });
  }


  ngOnInit() {
  }

}
