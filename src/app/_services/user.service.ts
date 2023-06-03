import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from 'src/app/_services/global';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(GlobalVariable.AUTH_API + 'test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(GlobalVariable.AUTH_API + 'test/ser', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(GlobalVariable.AUTH_API + 'test/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(GlobalVariable.AUTH_API + 'test/admin', { responseType: 'text' });
  }
}
