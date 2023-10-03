import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginModel } from './models/login-model';
import { JobprofileService } from './services/jobprofile.service';
import { Jprofile } from './models/jprofile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobprofileapi';

  constructor(public auth: AuthService, public service: JobprofileService){
    
  }
}
