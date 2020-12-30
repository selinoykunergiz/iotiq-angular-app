import { NgModule } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { TodosRoutingModule } from '../todos/todos-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule, TableModule ,ButtonsModule, CollapseModule,InputsModule,ModalModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    TodosRoutingModule,
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
export class TodosModule { }
