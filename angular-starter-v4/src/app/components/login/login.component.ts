import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../../services/patient-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items: Array<any>;
  constructor(private S: PatientDataService) {
    console.log(S);
   }
  ngOnInit() {
    this.items = this.S.getItems();
  }

}
