import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
const materialToBeImported = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  imports: [materialToBeImported],
  exports: [materialToBeImported]
})
export class MaterialModule { }
