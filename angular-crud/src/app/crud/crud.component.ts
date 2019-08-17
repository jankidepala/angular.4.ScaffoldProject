import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { clone } from 'lodash';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  moduleId: module.id
})
export class CrudComponent implements OnInit {
  products: Product[];
  productForm = false;
  editProductForm = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this._productService.getProductsFromData();
  }

  showEditProductForm(product: Product) {
    if(!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Product) {
    if(this.isNewForm) {
      // add a new product
      this._productService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: Product) {
    this._productService.deleteProduct(product);
  }

  updateProduct() {
    this._productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

}