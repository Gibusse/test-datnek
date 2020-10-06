import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WebServicesService} from "../../webServices/web-services.service";
import {UsersService} from "../../webServices/users.service";
import {Router} from "@angular/router";
import {UserInfo} from "../../models/userInfo";

@Component({
  selector: 'app-new-language',
  templateUrl: './new-language.component.html',
  styleUrls: ['./new-language.component.scss']
})
export class NewLanguageComponent implements OnInit {
  addForm: FormGroup;
  listLanguages = [];
  userInfo: UserInfo;
  id: string;
  errors: [];
  public userId = localStorage.getItem('token');
  writing = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];
  speaking = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];
  comprehension = ['Elementaire', 'Pré-intermédiaire', 'Intermédiaire', 'Courant'];

  constructor(private fb: FormBuilder, private ws: WebServicesService,
              private usersService: UsersService, private router: Router,
              private userService: UsersService) {
                this.id = this.userService.getUserId();
              }

  ngOnInit(): void {
    this.getUser();
    this.initForm();
    this.getLanguages();
  }

  initForm(){
    this.addForm = this.fb.group({
      languageId: ['', Validators.required],
      speaking: ['', Validators.required],
      writing: ['', Validators.required],
      comprehension: ['', Validators.required],
      userId: [this.id]
    })
  }

  addLanguage(data){
    this.ws.create('addSelectedLanguage', data, this.id)
      .subscribe(
        res => {
          if(res.affectedRows === 1) this.router.navigateByUrl('/pages/list-of-languages');
        },
        error => this.errors[error]
      )
  }

  getLanguages() {
    this.ws.read('languages')
      .subscribe(
        res => this.listLanguages = res,
        error => console.error(error)
      )
  }

  /**
   * GET user info
   */
  getUser () {
    this.usersService.getUserInfo(this.id)
      .subscribe(
        res => this.userInfo = res[0],
        error => this.router.navigateByUrl('/login')
      )
  };

  logOut(){
    this.userService.logoutUser();
    this.router.navigateByUrl('/login');
  }

}
