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

  constructor(private fb: FormBuilder, private ws: WebServicesService) { }

  ngOnInit(): void {
    this.initForm();
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
    console.log(data);
    this.ws.create('table', data)
      .subscribe(
        res => console.log(res),
        error => console.error(error)
      )
  }

}
