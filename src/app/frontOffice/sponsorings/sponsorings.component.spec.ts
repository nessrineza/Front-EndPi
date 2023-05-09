import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoringsComponent } from './sponsorings.component';

describe('SponsoringComponent', () => {
  let component: SponsoringsComponent;
  let fixture: ComponentFixture<SponsoringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
