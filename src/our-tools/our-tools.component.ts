import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../app/header/header.component';
import {InformationBar} from '../classes/InformationBar';

@Component({
  selector: 'app-our-tools',
  templateUrl: './our-tools.component.html',
  styleUrls: ['./our-tools.component.css']
})
export class OurToolsComponent implements OnInit {

  constructor() { }

  private _information: Array<InformationBar>;


  ngOnInit() {

  }


  get information(): Array<InformationBar> {
    return this._information;
  }

  set information(value: Array<InformationBar>) {
    this._information = value;
  }
}
