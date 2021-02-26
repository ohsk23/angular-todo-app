import { Component, OnInit } from '@angular/core';
import { tododata } from '../../tododata';

@Component({
  selector: 'app-today-todo',
  templateUrl: './today-todo.component.html',
  styleUrls: ['./today-todo.component.css']
})
export class TodayTodoComponent implements OnInit {
  tododata = tododata;
  constructor() { }

  ngOnInit(): void {

  }
}
