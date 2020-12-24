import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-items-container',
  templateUrl: './view-items-container.component.html',
  styleUrls: ['./view-items-container.component.scss']
})
export class ViewItemsContainerComponent implements OnInit {

  avail_views = ['posts', 'products', 'users', 'profile']
  view: any = '';

  constructor(private route: ActivatedRoute) { }

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
  }

}
