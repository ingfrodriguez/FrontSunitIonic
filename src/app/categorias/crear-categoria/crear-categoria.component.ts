import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuInterface } from '../../models/menu';
import { CategoriasService } from '../../_services/categorias.service';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css'],
})
export class CrearCategoriaComponent implements OnInit {
  form: any = {};
  errorMessage = '';
  mensaje='';
  successful=false;
  formFailed = false;
  menuTS: MenuInterface[] = [
    {
      icono: 'list-outline',
      link: 'categorias/listar',
      tooltip: 'Listar Categorias Productos'
    }
  ];

  constructor(private categoriaService: CategoriasService,private router: Router,private userService: UserService) {}

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };

  content ={};
  BanderaSeguridad=false;


  ngOnInit() {
    this.printCurrentPosition();
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

  onSubmit(): void {
    this.categoriaService.crear(this.form).subscribe({
      next: (data) => {
        this.mensaje=data.message;
        this.successful = true;
        setTimeout(() => {
            this.router.navigateByUrl("categorias/listar");
        }, 1500);

      },
      error: (err) => {
        this.errorMessage = err.message;
        this.formFailed = true;
      },
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
