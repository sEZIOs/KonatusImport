import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable()
export class InterfaceViewService {

  private view = new BehaviorSubject<string>("onView");
  selectedView = this.view.asObservable();
  constructor() {}
  switchView(data: string) {
    this.view.next(data);
  }
}
