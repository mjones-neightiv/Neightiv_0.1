import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurToolsComponent } from './our-tools.component';

describe('OurToolsComponent', () => {
  let component: OurToolsComponent;
  let fixture: ComponentFixture<OurToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
