import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalanderComponent } from './full-calander.component';

describe('FullCalanderComponent', () => {
  let component: FullCalanderComponent;
  let fixture: ComponentFixture<FullCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
