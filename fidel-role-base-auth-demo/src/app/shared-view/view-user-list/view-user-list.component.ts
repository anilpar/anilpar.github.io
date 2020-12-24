import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.scss']
})
export class ViewUserListComponent implements OnInit {

  users_list: any = [];

  constructor(private http: HttpService, private db: LocaldbService) { }

  @Output() userViewEvent = new EventEmitter();

  ngOnInit(): void {
    //this.get_users();
    this.db.data.subscribe((d) => {
      this.users_list = d['users']
    })

  }



  get_users() {
    this.http.get('users').subscribe((res) => {
      this.users_list = res;
    }, (err) => {
      console.log(err);
    })
  }

  editUser(u: any) {
    // Emit view-items-container
    this.userViewEvent.emit({ data: u, action: 'edit' });
  }

  deleteUser(u: any) {
    // Emit view-items-container
    this.userViewEvent.emit({ data: u, action: 'delete' });
  }

}
