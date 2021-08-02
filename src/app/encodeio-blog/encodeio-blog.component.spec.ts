import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeioBlogComponent } from './encodeio-blog.component';

describe('EncodeioBlogComponent', () => {
  let component: EncodeioBlogComponent;
  let fixture: ComponentFixture<EncodeioBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodeioBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodeioBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
