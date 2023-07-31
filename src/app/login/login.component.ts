import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10),Validators.pattern(/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]/)])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  onLogin(){
    console.log(this.loginForm.value);
  }
}
