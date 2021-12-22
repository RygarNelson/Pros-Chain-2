import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private apiUrl: string = environment.server_location + "/api/sample";

  constructor(private http: HttpClient) { }

  checkServerConnection(): Observable<object> {
    return this.http.get(this.apiUrl + "/");
  }
}
