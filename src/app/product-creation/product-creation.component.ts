import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  product = new Product;
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
  addProduct(){
    console.log('reached addProduct()');
    this.products.push(this.product);
    //this.updateProducts();
    this.product = new Product;
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}

class Product {
  public title: string;
  public price: number;
  public url: string;
}