import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  isLoggedIn = false;
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  empresas = [
    {
      id:1,
      nombre:"empresa x"
    },
    {
      id:2,
      nombre:"empresa y"
    }
  ]
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.form)
    
  }

}
