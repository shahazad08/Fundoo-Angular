import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordModel } from '../models/forget-password-model';
import { ForgetpasswordServiceService } from '../forgetpassword-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  hide=true;
  forgetpasswordForm:FormGroup;
  data:any;
  password_forget:ForgotPasswordModel=new ForgotPasswordModel();
  constructor(private formBuilder: FormBuilder, private httpService:ForgetpasswordServiceService) { }

  ngOnInit() {
    this.forgetpasswordForm=this.formBuilder.group(
      {
      'Email':[this.password_forget.email,[Validators.email,Validators.required]],
      
      }
    ); 
  }
  

logUser()
{
this.data={
  "email":this.password_forget.email,
}


console.log(this.data)
  this.httpService.post('password_reset/',this.data).subscribe(
    response=>{
      console.log(response)
    }
  )
}

}
