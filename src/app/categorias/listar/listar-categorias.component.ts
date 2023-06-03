import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../_services/categorias.service';
import { CategoriaProveedor } from '../../models/categoria-proveedor';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css'],
})
export class ListarCategoriasComponent implements OnInit {
  errorMessage = '';
  categorias:CategoriaProveedor[]=[{
    Nombre:'',
    Codigo:''
  }];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.listar()
  }

  listar(): void {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias=data
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }


}
