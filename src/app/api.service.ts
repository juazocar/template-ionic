import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  

  
  constructor(private http: HttpClient) { }

  getPosts(id:number){
    return this.http.get(this.apiUrl+'/posts/'+id);
  }
}
