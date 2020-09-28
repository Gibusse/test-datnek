import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS, PagesRoutingModule} from "./pages-routing.module";
import {MatTableModule} from "@angular/material/table";

const components = [
  ...COMPONENTS
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule
  ]
})
export class PagesModule { }
