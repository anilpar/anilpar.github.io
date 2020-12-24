import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {

  private db: any = {}
  data: BehaviorSubject<any>

  constructor() {
    this.data = new BehaviorSubject(this.db)
  }

  set(key: string, val: any) {
    this.db[key] = val;
    this.data.next(this.data.getValue())
  }

  get(key: any) {
    return this.db[key];
  }

}
