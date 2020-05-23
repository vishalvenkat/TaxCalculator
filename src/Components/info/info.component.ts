import { Component, OnInit } from '@angular/core';
import {ShowRulesService} from "../../Service/ShowRules/show-rules.service";

@Component({
  selector: 'app-info',
  template: `<div class="main">
      <div >{{baseMessage}}</div>
            <ul>
                <li *ngFor="let rule of rulesToDisplay">{{ rule }}</li>
            </ul>
  </div>
  `,
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  baseMessage = 'TaxCalculator helps you know the minimum tax amount you need to pay for your annual income.';
  rulesToDisplay;

  constructor() {
    let rules = new ShowRulesService();
    this.rulesToDisplay = rules.getRules();
  }

  ngOnInit() {
  }


}
