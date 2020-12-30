import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from '../components/components-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [],
  imports: [
    ComponentsRoutingModule,
    UsersModule,
    TodosModule,
    PostsModule
  ]
})
export class ComponentsModule { }
