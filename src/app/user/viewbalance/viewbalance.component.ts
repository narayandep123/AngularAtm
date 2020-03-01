import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent implements OnInit {
  userDetails
  constructor(private router: Router, private service: UserService) { }

  ngOnInit() 
  {
    this.service.getbalance().subscribe(
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

}
