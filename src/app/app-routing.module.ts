import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';
import {Todo} from './models/Todos';

const routes: Routes = [
  {path: '',
  component: Todo}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TodosComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
