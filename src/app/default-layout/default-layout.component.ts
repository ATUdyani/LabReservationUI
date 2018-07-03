import { Component, Input } from '@angular/core';
import { navItems } from '../../app/_nav';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService } from 'src/app/services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  userDetail={user:{email:""}};
  constructor(private userService:UserService, private router:Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit(): void {
    this.userService.getUserFromServer().subscribe(res=>{
      this.userDetail.user.email = res.user.email;
      this.userService.saveUser(res.user);
    });
  }

  logout() {
    this.router.navigate(["/login"]);
    this.userService.setNull();
  }
}
