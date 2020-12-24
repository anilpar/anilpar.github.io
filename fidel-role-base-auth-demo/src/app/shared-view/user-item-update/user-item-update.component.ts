import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-user-item-update',
  templateUrl: './user-item-update.component.html',
  styleUrls: ['./user-item-update.component.scss']
})
export class UserItemUpdateComponent implements OnInit {

  @Input('userItemToEdit') userItemToEdit: any;

  @Output() userEvent = new EventEmitter();

  updateForm: FormGroup;
  users_list: any = [];

  constructor(private http: HttpService, private localDB: LocaldbService) {

    this.updateForm = new FormGroup({
      fullname: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      website: new FormControl(null),
      company: new FormControl(null),
      country: new FormControl(null),
    });

  }

  ngOnInit(): void {
    this.localDB.data.subscribe((data) => {
      this.users_list = data['users'];
    })

    console.log(this.users_list);
  }

  reset() {
    this.updateForm.patchValue({
      fullname: null,
      username: null,
      email: null,
      address: null,
      phone: null,
      website: null,
      company: null,
      country: null,
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
      "id": '525',
      "name": this.updateForm.get('fullname')?.value || '',
      "username": this.updateForm.get('username')?.value || '',
      "email": this.updateForm.get('email')?.value || '',
      "address": {
        "street": "",
        "suite": "",
        "city": this.updateForm.get('address')?.value || '',
        "zipcode": "",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": this.updateForm.get('phone')?.value || '',
      "website": this.updateForm.get('website')?.value || '',
      "company": {
        "name": this.updateForm.get('company')?.value || '',
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "Real-time e-markets"
      }
    }

    let apiUrl = 'users';

    this.http.post(apiUrl, reqBody).subscribe((res) => {
      console.log(res);

      this.users_list.push(res);

      // Emit to admin-dashboard
      this.userEvent.emit({ type: 'success', data: res })
      console.log(this.users_list);
      this.localDB.set('users', this.users_list);

    }, (err) => {

    });

    return true;

  }



}
