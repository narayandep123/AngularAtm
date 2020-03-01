import { UserService } from '../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res; 
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  onSubmitw()
  {
    this.router.navigate(['/withdrow']);
  }

  onSubmitd()
  {
    this.router.navigate(['/deposit']);
  }

  onSubmitu(){
    this.router.navigate(['/mobile']);
  }
   
  onSubmitv()
  {
    this.router.navigate(['/viewbalance']);
  }
  onSubmitl(){
    this.router.navigate(['/lasttransaction']);
  }
}