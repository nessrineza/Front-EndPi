import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadUserRComponent } from './head-user-r.component';

describe('HeadUserRComponent', () => {
  let component: HeadUserRComponent;
  let fixture: ComponentFixture<HeadUserRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadUserRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadUserRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
