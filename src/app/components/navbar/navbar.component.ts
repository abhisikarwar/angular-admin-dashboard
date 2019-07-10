import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  profile_pic: string;
  username: string;
  islogin: boolean;
  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.islogin = true
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.username = localStorage.getItem('username');
    this.profile_pic = localStorage.getItem('profile_pic');
    //    var user_session = localStorage.getItem('login');
    //    console.log(user_session);
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return '';
  }

  logOut() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    localStorage.removeItem('profile_pic');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get user(): any {
    // let user1 = JSON.parse(localStorage.getItem('userdata'));
    // if(!user1){
    //   localStorage.removeItem('userdata');
    //   this.router.navigate(['/login']);
    // }
    let user = localStorage.getItem('username');
    if (!user) {
      this.islogin = false
      return "login"
    } else {
      this.islogin = true
      return user;
    }
     
  }
  get profile_pi(): any {
    // let user1 = JSON.parse(localStorage.getItem('userdata'));
    // if(!user1){
    //   localStorage.removeItem('userdata');
    //   this.router.navigate(['/login']);
    // }
   
    let profile_pic = localStorage.getItem('profile_pic');
    if(!profile_pic){
      return "assets/img/theme/team-4-800x800.jpg"
    }else{
      return profile_pic;
    }
  }

}
