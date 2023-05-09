import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppoComponent } from './detail-appo.component';

describe('DetailAppoComponent', () => {
  let component: DetailAppoComponent;
  let fixture: ComponentFixture<DetailAppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAppoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
