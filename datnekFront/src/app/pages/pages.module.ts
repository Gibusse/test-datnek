import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS, PagesRoutingModule} from "./pages-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {UsersService} from "../webServices/users.service";

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
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class PagesModule { }
