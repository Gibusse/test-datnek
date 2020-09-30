import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {WebServicesService} from "../webServices/web-services.service";
import {HttpClient} from "@angular/common/http";

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let appServiceStub;
  let routerStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        { provider: Router, useValue: {}},
        { provider: WebServicesService, useValue: {}}]
    })
    .compileComponents();

    appServiceStub = TestBed.inject(WebServicesService);
    appServiceStub.create = jasmine.createSpy('create');

    routerStub = TestBed.inject(Router);
    routerStub.navigateByUrl = jasmine.createSpy('navigateByUrl');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  xdescribe('init component', () => {
    it('should init login form', () =>{
     // Given
      component.loginForm = null;

     // When
      component.ngOnInit();

     //Then
      expect(component.loginForm).toBeTruthy();
      expect(component.loginForm.controls['userEmail']).toBeTruthy();
    });

    it('should set userEmail required', () => {
      // Given
      component.loginForm = null;

      // When
      component.ngOnInit();

      //Then
      const emailControl = component.loginForm.controls['userEmail'];

      emailControl.setValue('');
      expect(emailControl.errors).toBeTruthy();
    })
  });

  xdescribe('login', () => {
    it('should call webService create method', () => {

    });
  });

});
