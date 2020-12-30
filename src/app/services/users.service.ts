import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersModel } from '../models/_index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.ApiBaseUrl;
  }

  getList() {
    return this.http.get<UsersModel[]>(this.apiUrl + "users");
  }

  /*Post method */
  // createUser(model: UsersModel){
  //   return this.http.post<any>(this.apiUrl + "/add", model);
  // }

}


