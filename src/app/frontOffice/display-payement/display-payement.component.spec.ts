import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPayementComponent } from './display-payement.component';

describe('DisplayPayementComponent', () => {
  let component: DisplayPayementComponent;
  let fixture: ComponentFixture<DisplayPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
