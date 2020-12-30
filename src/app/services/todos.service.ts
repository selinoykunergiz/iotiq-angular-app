import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodosModel } from '../models/_index';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.ApiBaseUrl;
  }

  getList() {
    return this.http.get<TodosModel[]>(this.apiUrl + "todos");
  }

  /*Post method */
  // addTodos(model: TodosModel){
  //   return this.http.post<any>(this.apiUrl + "/add", model);
  // }
  
}


