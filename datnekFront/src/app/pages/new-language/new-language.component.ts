import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-language',
  templateUrl: './new-language.component.html',
  styleUrls: ['./new-language.component.scss']
})
export class NewLanguageComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

}
