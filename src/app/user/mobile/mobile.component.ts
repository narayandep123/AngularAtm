import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private service: UserService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }
 
  onSubmit(UserName:string,PhoneNumber1:string,PhoneNumber2:string)
  {
    this.service.mobilereset(UserName,PhoneNumber1,PhoneNumber2).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/thankyou');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username ', 'Authentication failed.');
        else
          console.log(err);
      }
    );
}
}
