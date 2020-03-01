import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  constructor(private service: UserService,private router: Router) { }
  UserName
  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.UserName = res;  
      },
      err => {
        console.log(err);
      },
    );
  }
  onSubmit(Deposit:number,UserName:string)
  {
    this.service.Amount(Deposit,UserName).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/thankyou');
      }
    )
  }
}
