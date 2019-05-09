/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconThemifyComponent } from './icon-themify.component';

describe('IconThemifyComponent', () => {
  let component: IconThemifyComponent;
  let fixture: ComponentFixture<IconThemifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconThemifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconThemifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
