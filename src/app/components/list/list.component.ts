import { Component } from '@angular/core';
import { JobprofileService } from 'src/app/services/jobprofile.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  adottnev = '';
  constructor(public service: JobprofileService, public auth: AuthService){
    service.read();
  }
}
