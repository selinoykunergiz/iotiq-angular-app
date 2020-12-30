import { NgModule } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts' , component: PostsComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PostsRoutingModule { }
