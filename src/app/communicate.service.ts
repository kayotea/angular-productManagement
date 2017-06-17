import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {
  observedProducts = new BehaviorSubject(null);
  updateProducts(products: Array<any>){
    this.observedProducts.next(products);
  }

  constructor() { }

}
