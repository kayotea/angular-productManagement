import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './communicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  products = [
    { 
      title: "Camera", 
      price: 100, 
      url: "https://www.bhphotovideo.com/images/images2500x2500/nikon_1560_d500_dslr_camera_with_1214162.jpg" },
    { 
      title: "Nalgene",
      price: 10,
      url:
      "https://target.scene7.com/is/image/Target/15073527?wid=520&hei=520&fmt=pjpeg"
    }
  ];

  constructor(private _communicateService: CommunicateService) {
    _communicateService.updateProducts(this.products);
  }
  updateProducts(){
    this._communicateService.updateProducts(this.products);
  }
}
