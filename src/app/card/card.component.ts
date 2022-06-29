import { product, productList } from './../core/product-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  productList : productList[];
  constructor() {
    this.productList = product;
   }

  ngOnInit(): void {
  }

}
