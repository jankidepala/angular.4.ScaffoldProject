import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../../services/patient-data.service';

@Component({
  selector: 'app-dashboard',
  template:
  `<app-widget-one [message]="S.message">
  <div class="weirdos">EWIRDSCMLSKD</div>
  <h1>Header title</h1>
  <h3>some text</h3>
  <div header>SOme Header</div>
  </app-widget-one>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private S: PatientDataService) {
    console.log(S.message);
   }

  ngOnInit() {
  }

}
