import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserRegisteration } from '../models/user-registeration';
import { UserServiceService } from '../user-service.service';
import { supportsWebAnimations } from '@angular/animations/browser/src/render/web_animations/web_animations_driver';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  registerForm:FormGroup;
  user:UserRegisteration= new UserRegisteration();
  data:any;
  hide=true;
  matsnackbar: any;
  router: any;
  constructor(private formBuilder: FormBuilder,
    private httpService:UserServiceService) { 
    console.log("Two way binding")
  }

  ngOnInit() {

    this.registerForm=this.formBuilder.group(
      {
      'firstName': [this.user.first_name,Validators.required],
      'lastName':[this.user.last_name,Validators.required],
      'email':[this.user.email,[Validators.email,Validators.required]],
      'password':[this.user.password,[Validators.maxLength(10),Validators.minLength(7)]],
    }
    ); 
  }



registerUser()
{
this.data={
  "first_name":this.user.first_name,
  "last_name":this.user.last_name,
  "email":this.user.email,
  "password":this.user.password
}



// console.log(this.data)
//   this.httpService.post('register/',this.data).subscribe(
//     response=>{
//       console.log(response)
//     }
//   )

// }
// }

console.log(this.data)
  this.httpService.post('register/',this.data).subscribe(
    response=>{
      console.log(response)
      if (response.code==200)
      {
        this.matsnackbar.open(' Registered Successfully', 'Login', { 
          duration:2000,});
          this.router.navigate(['api/login/']);
      }
      else{
        this.matsnackbar.open(response.Message,"Registerd Failed")
      }
    },
    error => {
        console.log("Error", error)
    }
  );
}
}
// Submit() {
//   this.serviceService.registerUser(this.user).subscribe(
//   data => {
//   console.log(data);
//   if(data.code==200)
//   {
//   this.matsnackbar.open(' Registered Successfully', 'Login', {
//   duration: 2000,});
//   // this.router.navigate(['/login']);
//   }
//   else{
//   this.matsnackbar.open(data.Message,"Register Failed",)
//   }
//   },
//   error => {
//   console.log("Error", error)
  
//   }
//   );
//   }
  