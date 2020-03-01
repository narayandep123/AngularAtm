import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
//import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private service: UserService, private router: Router,private toastr: ToastrService) { }
 // disabled: boolean = true;

  ngOnInit() {
  }
  
  onSubmit(UserName:string) {
    this.service.login1(UserName).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/for');
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
