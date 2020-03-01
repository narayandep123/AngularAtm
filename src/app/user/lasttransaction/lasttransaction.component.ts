import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-lasttransaction',
  templateUrl: './lasttransaction.component.html',
  styleUrls: ['./lasttransaction.component.css']
})
export class LasttransactionComponent implements OnInit {

  private gridApi;
private gridColumnApi;
private columnDefs;
private sortingOrder;
userDetails
  constructor(private httpService: HttpClient,private service: UserService) {
    this.columnDefs=[
      {
        headerName:"Deposit",
        field:"Deposit",
        width:150,
        //sortingOrder:["asc","desc"]
      },
      {
        headerName:"DateTime",
        field:"Email",
        width:150,
      //  sortingOrder:["desc",null]
      },
      {
        headerName:"Withdrow",
        field:"Withdrow",
        width:120,
        sortingOrder:[null,null]
      },
      {
        headerName:"current_Balance",
        field:"current_Balance",
        width:90,
        //sortingOrder:["asc"]
      }
    ];
    this.sortingOrder=["desc","asc",null];
   }

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
  onGridReady(params)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    this.httpService.get('https://localhost:44332/api/getRegister/?'+'userDetails='+this.userDetails).subscribe(  
        data => {  
         params.api.setRowData(data);
        }
      )
  }
}
