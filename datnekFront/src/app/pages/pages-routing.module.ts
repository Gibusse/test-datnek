import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ListLanguagesComponent} from "./list-languages/list-languages.component";
import {NewLanguageComponent} from "./new-language/new-language.component";
import {UpdateLanguageComponent} from "./update-language/update-language.component";
import {DetailsLanguageComponent} from "./details-language/details-language.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-of-languages',
        component: ListLanguagesComponent
      },
      {
        path: 'new-language',
        component: NewLanguageComponent
      },
      {
        path: 'update-language',
        component: UpdateLanguageComponent
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
  PagesComponent,
  ListLanguagesComponent,
  NewLanguageComponent,
  UpdateLanguageComponent,
  DetailsLanguageComponent
]
