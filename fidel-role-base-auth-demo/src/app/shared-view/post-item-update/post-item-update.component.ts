import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-post-item-update',
  templateUrl: './post-item-update.component.html',
  styleUrls: ['./post-item-update.component.scss']
})
export class PostItemUpdateComponent implements OnInit {

  @Input('userItemToEdit') userItemToEdit: any;

  @Output() userEvent = new EventEmitter();

  updateForm;
  post_list: any = [];

  constructor(private http: HttpService, private localDB: LocaldbService) {
    this.updateForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      post_body: new FormControl(null),

    });

  }

  ngOnInit(): void {
    this.localDB.data.subscribe((data) => {
      this.post_list = data['posts'];
    })

    console.log(this.post_list);
  }

  reset() {
    this.updateForm.patchValue({
      title: null,
      post_body: null,

    })
  }

  handleCancel() {
    this.userEvent.emit({ type: 'cancel', data: '' })
  }

  updateDetails(): Boolean {
    if (this.updateForm.status != 'VALID') {
      alert("Please Enter All required information")
      return false;
    }


    let reqBody = {
      "albumId": 1,
      "id": 1,
      "title": this.updateForm.get('title')?.value || '',
      "body": this.updateForm.get('post_body')?.value || '',

    }

    let apiUrl = 'posts';

    this.http.post(apiUrl, reqBody).subscribe((res) => {
      console.log(res);

      this.post_list.push(res);

      // Emit to admin-dashboard
      this.userEvent.emit({ type: 'success', data: res })
      console.log(this.post_list);
      this.localDB.set('posts', this.post_list);

    }, (err) => {

    });

    return true;
  }



}
