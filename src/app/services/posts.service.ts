import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostsModel } from '../models/_index';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.ApiBaseUrl;
  }

  getList() {
    return this.http.get<PostsModel[]>(this.apiUrl + "posts");
  }
  
}


