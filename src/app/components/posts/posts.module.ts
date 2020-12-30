import { NgModule } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { PostsRoutingModule } from '../posts/posts-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule, TableModule ,ButtonsModule, CollapseModule,InputsModule,ModalModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsRoutingModule,
    BrowserModule,
    WavesModule.forRoot(),
    TableModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    IconsModule
  ]
})
export class PostsModule { }
