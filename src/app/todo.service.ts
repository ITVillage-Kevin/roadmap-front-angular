import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class TodoService {
  registerTodoEvent: EventEmitter<object> = new EventEmitter();
  constructor(private http: HttpClient) { }

  registerTodo(todoParams: any): Observable<Response> {
    const params = new HttpParams()
      .set('todoName', todoParams.todoName)
      .set('todoDate', todoParams.todoDate);
    return this.http.post<Response>(environment.url + '/register', {}, {
      params,
      responseType: 'json'
    });
  }
}
