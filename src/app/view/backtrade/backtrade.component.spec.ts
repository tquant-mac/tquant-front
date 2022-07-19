import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktradeComponent } from './backtrade.component';

describe('BacktradeComponent', () => {
  let component: BacktradeComponent;
  let fixture: ComponentFixture<BacktradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
