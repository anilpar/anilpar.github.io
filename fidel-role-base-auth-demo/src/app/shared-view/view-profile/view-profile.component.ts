import { Component, OnInit } from '@angular/core';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor(private db: LocaldbService) { }

  user: any;

  ngOnInit(): void {
    this.user = this.db.get('current_user');
  }

}
