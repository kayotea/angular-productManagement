import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products = [];

  constructor(private _communicateService: CommunicateService) {
    this.subscription = _communicateService.observedProducts.subscribe(
      (updatedProducts) => {this.products = updatedProducts;},
      (err) => {},
      () => {}
    )
    //_communicateService.updateProducts(this.products)
  }
  updateProducts(){
    this._communicateService.updateProducts(this.products);
  }
  retreiveCurrentProductData(){
    //this.products = this._communicateService.subject.getValue();
  }

  deleteProduct(productIndex){
    console.log('reached deleteproduct');
    if (productIndex > -1) { this.products.splice(productIndex, 1); }
    //this.updateProducts();
  }

  //id: string;
  ngOnInit() {
    //this._route.params.subscribe(params => { this.id = params.product-list })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}