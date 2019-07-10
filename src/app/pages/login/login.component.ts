import { Component, OnInit, OnDestroy } from '@angular/core';
import { Login } from '../../models/login';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    login = new Login();
    constructor(public _api: AdminService, private router: Router) { }
    email_empty: any;
    password_empty: any;
    user_exist: any;
    ngOnInit() {
        this.email_empty = false;
        this.password_empty = false;
        this.user_exist = false;
        if (localStorage.getItem('login') != null) {
            this.router.navigate(['/challenge']);
        } else {
            this.router.navigate(['/login']);
        }
    }
    ngOnDestroy() {
    }
    loginSubmit() {
        this.email_empty = false;
        this.password_empty = false;
        this.user_exist = false;

        if (!this.login.email && !this.login.password) {
            console.log('please fill empty fields');
            this.email_empty = true;
            this.password_empty = true;
        } else if (!this.login.email) {
            this.email_empty = true;
        } else if (!this.login.password) {
            this.password_empty = true;
        } else {
            // localStorage.setItem('login', 'full_name)');
            // this.router.navigate(['/challenge']);
            this._api.admin_login(this.login).subscribe((response: any) => {
                //   localStorage.setItem('login', 'JSON.stringify(response.full_name)');
                //this.router.navigate(['/challenge']);
                if (response.error) {
                    Swal.fire('', response.message, 'error')
                } else {
                    localStorage.setItem('user_id', response.data._id);
                    localStorage.setItem('username', response.data.admin_name)
                    localStorage.setItem('profile_pic', response.data.profile_pic)
                    localStorage.setItem('token', response.token)
                    this.router.navigate(['/challenge']);
                    Swal.fire('', response.message, 'success')
                }
            });
        }
    }



}
