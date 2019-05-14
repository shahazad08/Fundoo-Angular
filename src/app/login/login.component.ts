import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModule } from '../models/model.login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide=true;
  loginForm:FormGroup;
  data:any;
  user_login:LoginModule=new LoginModule();
  constructor(private formBuilder: FormBuilder, private httpService:LoginServiceService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group(
      {
      'Email':[this.user_login.email,[Validators.email,Validators.required]],
      'Password':[this.user_login.password,[Validators.maxLength(10),Validators.minLength(7)]],
      }
    ); 
  }
  

loginUser()
{
this.data={
  "email":this.user_login.email,
  "password":this.user_login.password,
}


console.log(this.data)
  this.httpService.post('api/login/',this.data).subscribe(
    response=>{
      console.log(response)
    }
  )

}

}
