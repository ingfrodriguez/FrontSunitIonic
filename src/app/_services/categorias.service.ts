import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable,httpOptions } from 'src/app/_services/global';
import { CategoriaProveedor } from '../models/categoria-proveedor';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<CategoriaProveedor>(GlobalVariable.AUTH_API + 'ListarProductos', httpOptions);
  }
}
