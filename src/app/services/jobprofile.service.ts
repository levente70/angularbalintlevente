import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Jprofile } from '../models/jprofile';



@Injectable({
  providedIn: 'root'
})
export class JobprofileService {

  cim: string = 'https://apiexample.andraskovacs.com/JobProfile';
  munkak: Jprofile[] = [];
  munkaId: Jprofile[] = [];


  constructor(public http: HttpClient, private router: Router) { 
    this.read();
    this.readOwn();
  }
  read(adottnev=''){
    this.http.get<Jprofile[]>(this.cim).subscribe(t => {
      if (adottnev != ''){
        this.munkak = this.munkak.filter(z => z.owner?.userName == adottnev);
      } else {
        this.munkak= t;
      }
    })
  }
  readOwn(){
    this.http.patch<Jprofile[]>(this.cim, null, {headers: this.getHeader()}).subscribe(t => {
      this.munkaId = t;
    });
  }

  create(t: Jprofile){
    this.http.post(this.cim, t, {headers: this.getHeader()}).subscribe(z => {
      this.read();
      this.readOwn();
      this.router.navigate(['list']);
    });
  }

  delete(id: string){
    this.http.delete(this.cim + '/' + id, {headers: this.getHeader()}).subscribe(t => {
      this.read();
      this.readOwn();
    });
  }

  update(t: Jprofile){
    this.http.put(this.cim, t, {headers: this.getHeader()}).subscribe(z => {
      this.read();
      this.router.navigate(['list']);
    });
  }


  private getHeader() : HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }


  public getSellers(){
    return new Set<string>(this.munkak.map(z => z.owner?.userName + ''));
  }

  public findById(id: string){
    return this.munkak.find(t => t.id == id);
  }


}
