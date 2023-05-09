import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSponsoringsComponent } from './list-sponsoring.component';

describe('ListSponsoringComponent', () => {
  let component: ListSponsoringsComponent;
  let fixture: ComponentFixture<ListSponsoringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSponsoringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSponsoringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
