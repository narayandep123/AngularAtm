import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrow',
  templateUrl: './withdrow.component.html',
  styleUrls: ['./withdrow.component.css']
})
export class WithdrowComponent implements OnInit {

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
  onSubmit(withdrow:number,UserName:string)
  {
    this.service.AmountWithdrow(withdrow,UserName).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/thankyou');
      }
    )
  }
}
