import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceAddFComponent } from './annonce-addF.component';

describe('AnnonceAddFComponent', () => {
  let component: AnnonceAddFComponent;
  let fixture: ComponentFixture<AnnonceAddFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceAddFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceAddFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
