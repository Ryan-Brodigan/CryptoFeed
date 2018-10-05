import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSelectionMenuComponent } from './coin-selection-menu.component';

describe('CoinSelectionMenuComponent', () => {
  let component: CoinSelectionMenuComponent;
  let fixture: ComponentFixture<CoinSelectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSelectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSelectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
