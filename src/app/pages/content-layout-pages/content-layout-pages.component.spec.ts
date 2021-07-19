import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLayoutPagesComponent } from './content-layout-pages.component';

describe('ContentLayoutPagesComponent', () => {
  let component: ContentLayoutPagesComponent;
  let fixture: ComponentFixture<ContentLayoutPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLayoutPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
