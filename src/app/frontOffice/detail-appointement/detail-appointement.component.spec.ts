import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppointementComponent } from './detail-appointement.component';

describe('DetailAppointementComponent', () => {
  let component: DetailAppointementComponent;
  let fixture: ComponentFixture<DetailAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAppointementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
