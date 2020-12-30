import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { Constants } from '../app/constants';
import { UsersService , TodosService } from './services/_index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [
    Constants,
    UsersService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
