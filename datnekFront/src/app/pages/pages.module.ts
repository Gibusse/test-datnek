import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS, PagesRoutingModule} from "./pages-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import { NewLanguageComponent } from './new-language/new-language.component';
import {MatDividerModule} from "@angular/material/divider";
import { UpdateLanguageComponent } from './update-language/update-language.component';

const components = [
  ...COMPONENTS
]

@NgModule({
  declarations: [
    ...components,
    NewLanguageComponent,
    UpdateLanguageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class PagesModule { }
