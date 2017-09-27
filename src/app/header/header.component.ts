import { Component, OnInit } from '@angular/core';
import { NavigationPage } from '../classes/NavigationPage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _navigationBar= [];
  private _motto;
  private _logo;
  private _contactEmail;
  private _contactPhone;
  private _loginMessage;

  constructor() {
    this.motto = 'Community Investments for Today and Tomorrow';
    this.logo = '../../assets/updated_Neightiv_Logo.png';
    this.contactEmail = 'support@neightiv.com';
    this.contactPhone = '123-456-7890';
    this.loginMessage = 'Login Here';
  }

  ngOnInit() {
    this.createHeaderTabs();
  }

  public createHeaderTabs() {
    const whoWeAre = new NavigationPage('WhoWeAre', '/who#we#are');
    const whatWeDo = new NavigationPage('WhatWeDo', '/what#we#do');
    const ourHistory = new NavigationPage('OurHistory', '/our#history');
    const ourTools = new NavigationPage('OurTools', '/our#tools');

    this.navigationBar.push(whoWeAre);
    this.navigationBar.push(whatWeDo);
    this.navigationBar.push(ourHistory);
    this.navigationBar.push(ourTools);

  }

  get navigationBar(): Array<NavigationPage> {
    return this._navigationBar;
  }

  set navigationBar(value: Array<NavigationPage>) {
    this._navigationBar = value;
  }

  get logo() {
    return this._logo;
  }

  set logo(value) {
    this._logo = value;
  }

  get contactEmail() {
    return this._contactEmail;
  }

  set contactEmail(value) {
    this._contactEmail = value;
  }


  get contactPhone() {
    return this._contactPhone;
  }

  set contactPhone(value) {
    this._contactPhone = value;
  }


  get motto() {
    return this._motto;
  }

  set motto(value) {
    this._motto = value;
  }

  get loginMessage() {
    return this._loginMessage;
  }

  set loginMessage(value) {
    this._loginMessage = value;
  }
}
