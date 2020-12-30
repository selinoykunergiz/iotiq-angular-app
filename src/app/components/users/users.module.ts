import { NgModule } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule, TableModule ,ButtonsModule, CollapseModule,InputsModule,ModalModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    UsersRoutingModule,
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
export class UsersModule { }
