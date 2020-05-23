import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
const materialToBeImported = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [materialToBeImported],
  exports: [materialToBeImported]
})
export class MaterialModule { }
