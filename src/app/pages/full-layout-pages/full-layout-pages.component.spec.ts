import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutPagesComponent } from './full-layout-pages.component';

describe('FullLayoutPagesComponent', () => {
  let component: FullLayoutPagesComponent;
  let fixture: ComponentFixture<FullLayoutPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
