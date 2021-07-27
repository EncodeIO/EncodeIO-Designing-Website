import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesigningComponent } from './graphic-designing.component';

describe('GraphicDesigningComponent', () => {
  let component: GraphicDesigningComponent;
  let fixture: ComponentFixture<GraphicDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
