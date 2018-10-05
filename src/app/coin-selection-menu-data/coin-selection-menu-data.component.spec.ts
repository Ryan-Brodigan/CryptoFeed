import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSelectionMenuDataComponent } from './coin-selection-menu-data.component';

describe('CoinSelectionMenuDataComponent', () => {
  let component: CoinSelectionMenuDataComponent;
  let fixture: ComponentFixture<CoinSelectionMenuDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSelectionMenuDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSelectionMenuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
