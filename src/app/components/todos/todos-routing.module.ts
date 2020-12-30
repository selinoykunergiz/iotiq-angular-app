import { NgModule } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todos' , component: TodosComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class TodosRoutingModule { }
