import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.scss']
})
export class ViewProductListComponent implements OnInit {

  product_list: any = [];

  setting: any = { no_of_records_show: null };

  @Input('config') Config: { no_of_records_show: number } | any;

  constructor(private http: HttpService, private db: LocaldbService) { }

  ngOnInit(): void {
    console.log(this.Config);
    this.setting = this.Config || { no_of_records_show: 20 }
    // this.get_product();
    this.db.data.subscribe((d) => {
      this.product_list = d?.products;
    })
  }

  get_product() {
    this.http.get('photos').subscribe((res) => {
      this.product_list = res;
      this.update_view();
    }, (err) => {
      console.log(err);
    });
  }

  update_view() {
    if (this.setting['no_of_records_show']) {
      this.product_list = this.product_list.slice(0, this.setting['no_of_records_show']);

    }
  }

}
