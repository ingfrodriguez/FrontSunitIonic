import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable,httpOptions } from 'src/app/_services/global';
import { CategoriaProducto } from '../models/categoria-producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(GlobalVariable.AUTH_API + 'ListarCategoriaProducto', httpOptions);
  }
  crear(categoria: CategoriaProducto): Observable<any> {
    return this.http.post(GlobalVariable.AUTH_API+ 'CrearCategoriaProducto', {
      Nombre: categoria.Nombre
    }, httpOptions);
  }
}
