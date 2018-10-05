import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMenuComponent } from './news-menu.component';

describe('NewsMenuComponent', () => {
  let component: NewsMenuComponent;
  let fixture: ComponentFixture<NewsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
