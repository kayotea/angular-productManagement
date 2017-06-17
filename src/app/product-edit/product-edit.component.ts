import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  index: number;
  products = [];
  product = new Product;

  constructor(private _communicateService: CommunicateService, _route: ActivatedRoute) {
    this.subscription = _communicateService.observedProducts.subscribe(
      (updatedProducts) => {this.products = updatedProducts;},
      (err) => {},
      () => {}
    )
    _route.params.subscribe((param) => {this.index = param.id});
    this.product.title = this.products[this.index].title;
    this.product.price = this.products[this.index].price;
    this.product.url = this.products[this.index].url;
  }

  editProduct(){
    this.products[this.index] = this.product;
  }
  deleteProduct(){
    if (this.index > -1) { this.products.splice(this.index, 1); }
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

class Product {
  public title: string;
  public price: number;
  public url: string;
}