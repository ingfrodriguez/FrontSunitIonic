import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../_services/categorias.service';
import { MenuInterface } from '../../models/menu';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css'],
})

export class ListarCategoriasComponent implements OnInit {
  errorMessage = '';
  menuTS: MenuInterface[] = [
    {
      icono: 'add-outline',
      link: 'categorias/crear',
      tooltip: 'Agregar Categoria Producto'
    }
  ];


  categorias: any[] = [
  ];

  constructor(private categoriaService: CategoriasService,private userService: UserService) {}
  content ={};
  BanderaSeguridad=false;

  ngOnInit() {
    this.listar();
    this.userService.getAdminBoard().subscribe(
      data => {
        //this.content = data;
        this.BanderaSeguridad=true;
      },
      err => {
        this.BanderaSeguridad=false;
        this.content = JSON.parse(JSON.parse(JSON.stringify(err)).error).message;
      }
    );
  }


  listar(): void {
    this.categoriaService.listar().subscribe({
      next: (data) => {
        this.categorias =  JSON.parse(JSON.stringify(data));
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
    });
  }
}
