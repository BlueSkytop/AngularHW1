import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.base)
  }
  getById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }
}
