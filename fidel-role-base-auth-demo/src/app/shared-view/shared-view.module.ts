import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedViewRoutingModule } from './shared-view-routing.module';
import { ViewUserListComponent } from './view-user-list/view-user-list.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import { ViewPostListComponent } from './view-post-list/view-post-list.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewItemsContainerComponent } from './view-items-container/view-items-container.component';
import { UserItemUpdateComponent } from './user-item-update/user-item-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemUpdateComponent } from './product-item-update/product-item-update.component';
import { PostItemUpdateComponent } from './post-item-update/post-item-update.component';
import { TranslatorComponent } from './translator/translator.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ViewUserListComponent,
    ViewProductListComponent,
    ViewPostListComponent,
    ViewProfileComponent,
    ViewItemsContainerComponent,
    UserItemUpdateComponent,
    ProductItemUpdateComponent,
    PostItemUpdateComponent,
    TranslatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedViewRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createHttpLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ViewUserListComponent,
    ViewProductListComponent,
    ViewPostListComponent,
    ViewProfileComponent,
    ViewItemsContainerComponent,
    UserItemUpdateComponent,
    ProductItemUpdateComponent,
    PostItemUpdateComponent,
    TranslatorComponent,
    ViewProfileComponent
  ]
})
export class SharedViewModule { }
