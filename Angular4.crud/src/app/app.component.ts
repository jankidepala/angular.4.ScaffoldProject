import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Observable} from 'rxjs/Observable';
import { NgModule, OnChanges, SimpleChange, Input, Output, EventEmitter, OnInit, ViewEncapsulation  } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  f = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    state: new FormControl(),
    city: new FormControl(),
    zip: new FormControl()
  });
 
  onSubmit = function(s){
    console.log(s);
  };

}

