import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-view-items-container',
  templateUrl: './view-items-container.component.html',
  styleUrls: ['./view-items-container.component.scss']
})
export class ViewItemsContainerComponent implements OnInit {

  avail_views = ['posts', 'products', 'users', 'profile']
  view: any = '';

  userItemToEdit: any;

  constructor(private route: ActivatedRoute, private db: LocaldbService) { }
  popup = '';

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: any) => {
      console.log(paramMap['params'])
      if (paramMap?.params?.type) {
        let t = paramMap['params']['type'] || '';
        this.view = this.avail_views.includes(t) ? t : 'posts';
      } else {
        this.view = 'posts';
      }
    });
  }

  handleUserEvent(e: any) {
    console.log(e);
    if (e?.action == 'edit') {
      this.userItemToEdit = e['data'];
      this.popup = 'edit-user';

    } else if (e?.action == 'delete') {
      //this.popup = 'delete';
      let confirm = window.confirm(`Do you want to delete user ${e['data']['name']} ?`);
      if (confirm) {
        let u_id = e['data']['id'];

        let users_list = this.db.get('users')
        let finals = users_list.filter((e: any) => {
          return e['id'] !== u_id;
        })

        this.db.set('users', finals)

      }

    }

  }

  handleEditEvent(e: any) {
    this.hidePopup()
  }

  hidePopup() {
    this.popup = '';
    this.userItemToEdit = null;
  }

}
