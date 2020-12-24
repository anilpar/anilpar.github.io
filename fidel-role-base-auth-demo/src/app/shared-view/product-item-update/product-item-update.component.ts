import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-product-item-update',
  templateUrl: './product-item-update.component.html',
  styleUrls: ['./product-item-update.component.scss']
})
export class ProductItemUpdateComponent implements OnInit {


  @Input('userItemToEdit') userItemToEdit: any;

  @Output() userEvent = new EventEmitter();

  updateForm: FormGroup;
  product_list: any = [];

  constructor(private http: HttpService, private localDB: LocaldbService) {

    this.updateForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      thumbnail: new FormControl(null),
      image_url: new FormControl(null),
    });

  }

  ngOnInit(): void {
    this.localDB.data.subscribe((data) => {
      this.product_list = data['products'];
    })

    console.log(this.product_list);
  }

  reset() {
    this.updateForm.patchValue({
      title: null,
      thumbnail: null,
      image_url: null,
    })
  }

  handleCancel() {
    this.userEvent.emit({ type: 'cancel', data: '' })
  }

  updateDetails(): boolean {
    if (this.updateForm.status != 'VALID') {
      alert("Please Enter All required information")
      return false;
    }


    let reqBody = {
      "albumId": 1,
      "id": 1,
      "title": this.updateForm.get('title')?.value || '',
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    let apiUrl = 'photos';

    this.http.post(apiUrl, reqBody).subscribe((res) => {
      console.log(res);

      this.product_list.push(res);

      // Emit to admin-dashboard
      this.userEvent.emit({ type: 'success', data: res })
      console.log(this.product_list);
      this.localDB.set('photos', this.product_list);

    }, (err) => {

    });

    return true;

  }


}
