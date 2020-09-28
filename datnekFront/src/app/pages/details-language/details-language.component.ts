import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ListLanguages} from "../../models/list-languages";

@Component({
  selector: 'app-details-language',
  templateUrl: './details-language.component.html',
  styleUrls: ['./details-language.component.scss']
})
export class DetailsLanguageComponent implements OnInit {
  @Input() detailLanguage: ListLanguages;


  constructor() { }

  ngOnInit(): void {
    console.log(this.detailLanguage);
  }

}
