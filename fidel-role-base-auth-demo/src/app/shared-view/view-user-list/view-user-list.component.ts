import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.scss']
})
export class ViewUserListComponent implements OnInit {

  users_list: any = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.get_users();
  }

  get_users() {
    this.http.get('users').subscribe((res) => {
      this.users_list = res;
    }, (err) => {
      console.log(err);
    })
  }
}
