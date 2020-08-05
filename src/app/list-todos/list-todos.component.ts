import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {deleteOutputDir} from '@angular-devkit/build-angular/src/utils';
import { Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;
    // new Todo(1, 'Learn to Dance', false, new Date()),
    // new Todo(2, 'Learn to Sing', true, new Date()),
    // new Todo(3, 'Learn to Speak', false, new Date()),
    // // {id : 1, description : 'Learn to Dance'},
    // {id : 2, description : 'Learn to Sing'},
  //   // {id : 3, description : 'Learn to Speak'},
  // ];
  // // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // }
  constructor(
    private todoService: TodoDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(): void {
    this.todoService.retrieveAllTodos('JJZZ').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('JJZZ', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    )

    }

  updateTodo(id: number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);

  }
}
