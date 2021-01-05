import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestDataService {

  url = 'localhost:8080';

  constructor(private http: HttpClient) { }

  getAllPostByCategory(category: postCategory): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/api/v1/posts/category`, {category});
  }

  getCurrentPost(id: string): Observable<Post> {
    // here we make a call to backend using get request and the id of the current post as parameter
    return this.http.get<Post>(`${this.url}/api/v1/posts/${id}`);
  }
}
