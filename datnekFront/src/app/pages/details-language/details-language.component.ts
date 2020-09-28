import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ListLanguages} from "../../models/list-languages";

@Component({
  selector: 'app-details-language',
  templateUrl: './details-language.component.html',
  styleUrls: ['./details-language.component.scss']
})
export class DetailsLanguageComponent implements OnInit {


  /**
   * Initialise dialog from material library with data
   * to display
   * @param data
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: ListLanguages) { }

  ngOnInit(): void {
  }

}
