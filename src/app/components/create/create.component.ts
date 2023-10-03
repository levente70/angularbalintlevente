import { Component } from '@angular/core';
import { Jprofile } from 'src/app/models/jprofile';
import { AuthService } from 'src/app/services/auth.service';
import { JobprofileService } from 'src/app/services/jobprofile.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  actual: Jprofile = new Jprofile();
  
  constructor(public auth: AuthService, public service: JobprofileService){
    auth.protectComponent();
  }
}
