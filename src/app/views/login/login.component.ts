import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user:any={};
  constructor(private userService:UserService, private router: Router) {
 }

 login() {
   console.log(this.user);
   this.userService.loginUser(this.user).subscribe(res=>{
     if(res.success) {
       this.userService.saveToken(res.token);
      this.router.navigate(['/dashboard']);
     }
   });
 }
}
