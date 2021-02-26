import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayTodoComponent } from './today-todo/today-todo.component';

const routes: Routes = [
  { path:'', component: TodayTodoComponent },
  { path:'today', component: TodayTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
