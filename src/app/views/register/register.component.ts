import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  reg:any={};
  successFlag=true;
  formvalidAlertMessage="";
  formMessage="";
  alertbox=false;

  constructor(private userService:UserService, private router: Router) { }

  register() {
    if(this.reg.username != null && this.reg.email!=null && this.reg.password!= null && this.reg.number !=null) {
    var data = {
      name:this.reg.name,
      type:"user",
      contactNumber:this.reg.number,
      email:this.reg.email,
      username:this.reg.username,
      password:this.reg.password
    }
    if (this.reg.password === this.reg.cpassword) {
      this.userService.register(data).subscribe(res=>{
        if(res.success){
          this.successFlag = false;
          this.formMessage= "successfully created"
        } else {
          this.alertbox = true;
          this.formvalidAlertMessage = res.msg;
        }
      });
    } else {
      this.alertbox = true;
      this.formvalidAlertMessage = "Password Mis Match"
    }
    
  } else {
    this.alertbox = true;
    this.formvalidAlertMessage = "Fill the Fields!"
  }
  }

  loginto() {
    this.router.navigate(['/login']);
  }

}
