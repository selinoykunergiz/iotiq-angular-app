import { NgModule } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users' , component: UsersComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
