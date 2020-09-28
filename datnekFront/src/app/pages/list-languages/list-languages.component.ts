import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.scss']
})
export class ListLanguagesComponent implements OnInit {

  displayedColumns: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
