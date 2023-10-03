import { Component } from '@angular/core';
import { Jprofile } from 'src/app/models/jprofile';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobprofileService } from 'src/app/services/jobprofile.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent {
  aktualis: Jprofile = new Jprofile;
  constructor(private auth: AuthService, public service: JobprofileService, private route: ActivatedRoute, private router: Router){
    auth.protectComponent();
    this.route.params.subscribe(t => {
      let result = this.service.findById(t['id']);
      if (result == undefined){
        this.router.navigate(['error']);
      }
      else{
        this.aktualis = result;
      }
    });
  }

}
