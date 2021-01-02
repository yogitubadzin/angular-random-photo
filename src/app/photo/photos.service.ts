import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  baseUrl = 'https://api.unsplash.com/photos/random';
  clientId = 'Client-ID 08d19507529308e6b6874e4bce18a309019a26273da0556b967fa3969e972cf1';

  constructor(private http: HttpClient) {}

  getPhoto() {
    var headers = {
      headers: {
        Authorization: this.clientId
      }
    };

    return this.http.get<Photo>(this.baseUrl, headers);
  }
}
