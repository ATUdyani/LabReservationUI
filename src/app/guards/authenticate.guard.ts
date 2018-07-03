import { Injectable } from "@angular/core";
import { 
    Router,
    CanActivate,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
  } from '@angular/router';
  import { UserService } from '../services/user.service';
import { Observable } from "rxjs";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { map } from "rxjs/internal/operators/map";


@Injectable()
export class AuthenticateGuard implements CanActivate {
    loginSuccess: any;
    // ngOnInit(): void {
    //     this.userService.validateUser().subscribe(res=>this.loginSuccess= res.success);
    // }
   
    constructor(private router: Router, private userService:UserService) {

    }

    public canActivate(){
        var isLogin:Observable<boolean> = this.userService.validateUser();
        return isLogin.pipe(map(res=>{
            if (res){
                return true;
            } else {
                this.router.navigate(["/login"]);
            return false;
            }
        }));
       
    }
}