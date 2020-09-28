import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-of-languages'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule{}

export const COMPONENTS = [
  PagesComponent
]
