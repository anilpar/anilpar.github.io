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
      //country: new FormControl(null),
    });

  }

  ngOnInit(): void {
    this.localDB.data.subscribe((data) => {
      this.users_list = data['users'];
    })
    this.fillUserDetails();
  }


  fillUserDetails() {
    if (!this.userItemToEdit) { return false }
    this.updateForm.patchValue({
      fullname: this.userItemToEdit.name,
      username: this.userItemToEdit.username,
      email: this.userItemToEdit.email,
      address: this.userItemToEdit.address.city,
      phone: this.userItemToEdit.phone,
      website: this.userItemToEdit.website,
      company: this.userItemToEdit.company.name,
      //country: this.userItemToEdit.website,
    })

    return true;
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
      //country: null,
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
      "id": this.userItemToEdit ? this.userItemToEdit.id : '',
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
    let act = this.userItemToEdit ? 'edit' : 'create';

    console.log(act);

    if (act == 'edit') {
      this.http.put(apiUrl, reqBody).subscribe((res) => {
        this.callback(res);
      }, (err) => { });

    } else {
      this.http.post(apiUrl, reqBody).subscribe((res) => {
        this.callback(res);
      }, (err) => { });
    }



    return true;

  }

  callback(res: any) {
    // Emit to admin-dashboard
    let act = this.userItemToEdit ? 'edit' : 'create';
    if (act == 'create') {
      this.users_list.push(res);
    } else if (act == 'edit') {
      let index = this.users_list.findIndex((e: any) => {
        return e['id'] == this.userItemToEdit.id;
      });
      this.users_list[index] = res;
    }

    this.userEvent.emit({ type: 'success', data: res, action: act });
    this.localDB.set('users', this.users_list);
    console.log(this.users_list);

  }



}
