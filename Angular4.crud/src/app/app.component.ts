import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Observable} from 'rxjs/Observable';
import { NgModule, OnChanges, SimpleChange, Input, Output, EventEmitter, OnInit, ViewEncapsulation  } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: '<app-crud></app-crud>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  f = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });
  onSubmit = function(s){
    console.log(s);
  };

}

