import { Component } from '@angular/core';
import { LoginModel } from 'src/app/models/login-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  felhasznalo: LoginModel = new LoginModel();
  constructor(public auth: AuthService){
    
  }
  login(){
    this.auth.login(this.felhasznalo);
  }
}

