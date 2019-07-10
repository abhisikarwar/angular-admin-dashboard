import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    // localStorage.setItem('userdata','as')
    // let loginadin = localStorage.getItem('userdata')
    // if(!loginadin){
    //   this.router.navigate(['/login']);
    // this.checkAuth()
    // }
  }

  checkAuth(){
    let token = window.localStorage.getItem('token')
    if(token){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }
  }
  onDeactivate() {
    // document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    window.scrollTo(0, 0)
  }

}
