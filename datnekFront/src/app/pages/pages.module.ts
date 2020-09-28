import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS, PagesRoutingModule} from "./pages-routing.module";

const components = [
  ...COMPONENTS
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
