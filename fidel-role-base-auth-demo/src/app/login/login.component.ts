import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { LocaldbService } from '../services/localdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  def_password = 'user123';

  username = '';
  password = '';
  users_list: any = [];

  constructor(private http: HttpService, private route: Router, private db: LocaldbService) { }

  ngOnInit(): void {
    this.navigate()
  }

  processLogin() {
    if (this.username == '') {
      alert("enter your username");
      return false;
    }

    if (this.password == '') {
      alert("enter your password");
      return false;
    }

    if (this.username == "anil" && this.password == "anil") {
      window.localStorage.setItem('isLogin', "yes");
      window.localStorage.setItem('role', "admin");
      window.localStorage.setItem('user_name', 'Anil');
      this.navigate();
      return false;
    }

    if (!this.users_list || this.users_list.length == 0) {
      this.getUsers();
    }

    return false;
  }

  navigate() {
    if (window.localStorage.getItem('isLogin') && window.localStorage.getItem('isLogin') == 'yes') {
      let role = window.localStorage.getItem('role');
      if (role == 'admin') {
        this.route.navigate(['admin']);

      } else if (role == 'user') {

        this.route.navigate(['user']);
      }
    }
  }

  getUsers() {
    this.http.get('users').subscribe((res) => {
      this.users_list = res;

      let valid_user = this.users_list.find((e: any) => {
        if (typeof e == 'object') {
          return e["username"] == this.username && this.password == this.def_password;
        } else {
          return false
        }
      });

      if (valid_user) {
        window.localStorage.setItem('isLogin', "yes");
        window.localStorage.setItem('role', "user");
        window.localStorage.setItem('user_name', valid_user.name);
        this.db.set('current_user', valid_user)
        this.navigate();

      } else {
        alert("Please Enter Valid User Name and Password")
      }

    }, (err) => {
      console.log(err);
    })
  }

  reset() {
    this.username = "";
    this.password = "";
  }

}
