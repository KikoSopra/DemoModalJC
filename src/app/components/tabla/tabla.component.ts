import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [MessageService],
})
export class TablaComponent implements OnInit {
  products!: Product[];
  selectedProduct!: Product;
  first = 0;
  rows = 5;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }

  // Paginado

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.products
      ? this.first === this.products.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
  }

  // Seleccion

  selectProduct(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: product.name,
    });
    console.log(product);
  }

  onRowSelect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: event.data.name,
    });
    console.log(event.data);
  }

  onRowUnselect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Unselected',
      detail: event.data.name,
    });
  }
}
