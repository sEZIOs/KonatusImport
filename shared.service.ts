import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';

@Injectable()
export class sharedService {

  public sharedData = new Subject<any>();

  constructor() { }

  public setData(data: any) {
    this.sharedData = data[0];
    console.log(this.sharedData)
  }
  public getData() {
    console.log(this.sharedData);
    return this.sharedData;
  }
}
