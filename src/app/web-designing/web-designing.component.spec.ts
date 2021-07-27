import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesigningComponent } from './web-designing.component';

describe('WebDesigningComponent', () => {
  let component: WebDesigningComponent;
  let fixture: ComponentFixture<WebDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
