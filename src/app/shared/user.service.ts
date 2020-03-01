import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44332/';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    PhoneNumber:[''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register(UserName:string, Email:string, FullName:string,PhoneNumber:string, Password:string ) {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      PhoneNumber:this.formModel.value.PhoneNumber,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + 'api/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + 'api/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + 'api/UserProfile');
  }
  getbalance(){
    return this.http.get(this.BaseURI+'api/balance');
  }
  getUser(){
    return this.http.get(this.BaseURI + 'api/User');
  }
  login1(UserName:string) {
    return this.http.get(this.BaseURI + 'api/Forgot/'+UserName);
  }
  Amount(Deposit:number,UserName:string)
  {
  var body={
    Deposit:Deposit,
    UserName:UserName
  }
  return this.http.post(this.BaseURI+'api/Amount',body);
  }
  AmountWithdrow(Withdrow:number,UserName:string)
  {
  var body={
    Withdrow:Withdrow,
    UserName:UserName
  }
  return this.http.post(this.BaseURI+'api/AmountWithdrow',body);
  }
reset(UserName:string, password1:string,password2:string)
{
  var body={
    UserName:UserName,
    password1:password1,
    password2:password2
  }
 return this.http.post(this.BaseURI+'api/Reset',body);
}
mobilereset(UserName:string, PhoneNumber1:string,PhoneNumber2:string)
{
  var body={
    UserName:UserName,
    PhoneNumber1:PhoneNumber1,
    PhoneNumber2:PhoneNumber2
  }
 return this.http.post(this.BaseURI+'api/ResetMobile',body);
}
}