import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    // { path: '/challenge', title: 'Worksheet',  icon:'ni-planet text-blue', class: '' },
    // { path: '/add-challenge', title: 'Worksheet',  icon:'ni-planet text-blue', class: '' },
    // { path: '/challenge-detail', title: 'Worksheet',  icon:'ni-planet text-blue', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  username: string;
  profile_pic: string;
  islogin: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.profile_pic = localStorage.getItem('profile_pic');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      this.isCollapsed1 = true;
      this.isCollapsed2 = true;
   });
  }
  get profile_pi(): any {
    // let user1 = JSON.parse(localStorage.getItem('userdata'));
    // if(!user1){
    //   localStorage.removeItem('userdata');
    //   this.router.navigate(['/login']);
    // }
    let user = localStorage.getItem('username');
    if (!user) {
      this.islogin = false
    } else {
      this.islogin = true
    }
    let profile_pic = localStorage.getItem('profile_pic');
    if (!profile_pic) {
      return "assets/img/theme/team-4-800x800.jpg"
    } else {
      return profile_pic;
    }
  }
  logOut() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    localStorage.removeItem('profile_pic');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
