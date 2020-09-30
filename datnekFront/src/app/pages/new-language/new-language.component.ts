import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WebServicesService} from "../../webServices/web-services.service";

@Component({
  selector: 'app-new-language',
  templateUrl: './new-language.component.html',
  styleUrls: ['./new-language.component.scss']
})
export class NewLanguageComponent implements OnInit {
  addForm: FormGroup;
  listLanguages = [];
  writing = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];
  speaking = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];
  comprehension = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];

  constructor(private fb: FormBuilder, private ws: WebServicesService) { }

  ngOnInit(): void {
    this.initForm();
    this.getLanguages();
  }

  initForm(){
    this.addForm = this.fb.group({
      language: ['', Validators.required],
      speaking: ['', Validators.required],
      writing: ['', Validators.required],
      comprehension: ['', Validators.required]
    })
  }

  addLanguage(data){
    this.ws.create('selectedLanguage', data)
      .subscribe(
        res => {

        },
        error => console.error(error)
      )
  }

  getLanguages() {
    this.ws.read('languages')
      .subscribe(
        res => this.listLanguages = res,
        error => console.error(error)
      )
  }

}
