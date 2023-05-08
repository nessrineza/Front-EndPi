import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBackComponent } from './comment-back.component';

describe('CommentBackComponent', () => {
  let component: CommentBackComponent;
  let fixture: ComponentFixture<CommentBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
