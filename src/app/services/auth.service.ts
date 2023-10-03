import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';
import { Router } from '@angular/router';
import { Userek } from '../models/userek';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cim: string = 'https://apiexample.andraskovacs.com/Auth';
  

  constructor(public http: HttpClient, private router: Router) {
      
  }

  login(felhasznalo: LoginModel){
    

    this.http.post<TokenModel>(this.cim, felhasznalo).subscribe(adat => {
      localStorage.setItem('token', adat.token);
      localStorage.setItem('expiration', adat.expiration);
      localStorage.setItem('nev', felhasznalo.username);
      this.router.navigate(['list']);
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['list']);
  }
  
  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }


  protectComponent(){
    if (!this.isLoggedIn()){
      this.router.navigate(['login']);
    }
  }
  
  
  getCurrentUser(){
    return localStorage.getItem('nev');
  }
}


