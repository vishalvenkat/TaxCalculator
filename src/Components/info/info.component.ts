import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
  TaxCalculator helps you know the minimum tax amount you need to pay for your annual income.
  `,
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


}
