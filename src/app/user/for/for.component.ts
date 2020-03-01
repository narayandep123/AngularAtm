import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor(private service: UserService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(UserName:string,password1:string,password2:string)
  {
    this.service.reset(UserName,password1,password2).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/Thanks');
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
