import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-view-post-list',
  templateUrl: './view-post-list.component.html',
  styleUrls: ['./view-post-list.component.scss']
})
export class ViewPostListComponent implements OnInit {

  post_list: any = [];

  setting: any = { is_show_translate: false, no_of_records_show: null };

  @Input('config') Config: { is_show_translate: boolean, no_of_records_show: number } | any;

  constructor(private http: HttpService, private db: LocaldbService) { }

  ngOnInit(): void {
    this.setting = this.Config || { is_show_translate: false, no_of_records_show: null }

    this.db?.data?.subscribe((d) => {
      this.post_list = d?.posts || [];
      if (this.post_list.length) {
        this.update_view();
      }
    })

  }

  get_posts() {
    this.http.get('posts').subscribe((res) => {
      this.post_list = res;
      this.update_view();
    }, (err) => {
      console.log(err);
    });
  }

  update_view() {
    console.log(this.setting)
    if (this.setting['no_of_records_show']) {
      this.post_list = this.post_list.slice(this.setting['no_of_records_show'] * (-1));
      console.log(this.post_list)
    }
  }

}
