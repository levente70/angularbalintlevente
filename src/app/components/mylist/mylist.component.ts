import { Component } from '@angular/core';
import { JobprofileService } from 'src/app/services/jobprofile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent {
  constructor(public service: JobprofileService, public auth: AuthService){
    this.service.readOwn();
  }



}
