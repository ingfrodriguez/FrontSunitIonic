import { HttpClient, HttpHeaders } from '@angular/common/http';

export const GlobalVariable = Object.freeze({
  AUTH_API : 'http://192.168.1.13:8080/api/'
});


export const httpOptions = Object.freeze({

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })


});
