import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  post_list: any = [];
  admin_post_config = {
    is_show_translate: false,
    no_of_records_show: 10,
  }

  popup = '';

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = ['Users', 'Products', 'Posts'];
  public pieChartData: SingleDataSet = [10, 500, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private http: HttpService, private route: Router, private db: LocaldbService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  dashboard_data: any = {}
  userItemToEdit = '';

  ngOnInit(): void {
    if (!window.localStorage.getItem('isLogin')) {
      this.route.navigate(['login']);
    }

    let product_count = 0;
    let user_count = 0;
    let posts_count = 0;

    this.db?.data?.subscribe((d) => {
      this.dashboard_data = d;
      if (d?.products?.length) {
        product_count = d?.products?.length;
      }

      if (d?.users?.length) {
        user_count = d?.users?.length;
      }

      if (d?.posts?.length) {
        posts_count = d?.posts?.length;
      }

      this.pieChartData = [
        user_count,
        product_count,
        posts_count
      ];

    })

  }

  create_user() {
    this.popup = 'create-user';
  }

  handleUserEvent(e_data: any) {
    console.log(e_data);
    this.popup = '';
  }

  create_product() {
    this.popup = 'create-product';
  }

  create_post() {
    this.popup = 'create-post';
  }

  view_products() {
    alert("View Products");
  }

  view_post() {
    alert("View Post");
  }


}
