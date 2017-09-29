import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CrudComponent } from './crud/crud.component';
import { ProductService } from './crud/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
