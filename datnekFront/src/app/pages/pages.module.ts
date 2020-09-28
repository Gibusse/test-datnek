import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS, PagesRoutingModule} from "./pages-routing.module";
import { ListLanguagesComponent } from './list-languages/list-languages.component';

const components = [
  ...COMPONENTS
]

@NgModule({
  declarations: [
    ...components,
    ListLanguagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
