import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoresComponent } from './factores.component';

describe('FactoresComponent', () => {
  let component: FactoresComponent;
  let fixture: ComponentFixture<FactoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
