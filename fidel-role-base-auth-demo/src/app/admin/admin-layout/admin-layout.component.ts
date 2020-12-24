import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  post_list: any = [];
  is_profile_show = false;

  user_name: any = '';
  user_role: any = '';

  constructor(private route: Router, private db: LocaldbService, private http: HttpService) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('isLogin') != 'yes') {
      this.route.navigate(['login']);
    }

    this.user_name = window.localStorage.getItem('user_name');
    this.user_role = window.localStorage.getItem('role');
    this.route.navigate(['admin/dashboard']);
    this.fillDB();
  }

  toggle_profile_box() {
    this.is_profile_show = !this.is_profile_show;
  }

  logout() {
    window.localStorage.removeItem('role');
    window.localStorage.removeItem('isLogin');
    this.route.navigate(['login']);
  }

  fillDB() {
    this.http.get('users').subscribe((users) => {
      this.db.set('users', users);
    })

    this.http.get('posts').subscribe((posts) => {
      this.db.set('posts', posts);
    });

    this.http.get('photos').subscribe((res: any) => {
      let photos = res.splice(0, 4880);
      this.db.set('products', res);
    })
  }

  user() {
    alert("User");
  }

  post_feed() {
    alert("Post Feed");
  }

  product() {
    alert("product");
  }



}
