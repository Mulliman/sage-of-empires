import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourChooserComponent } from './colour-chooser.component';

describe('ColourChooserComponent', () => {
  let component: ColourChooserComponent;
  let fixture: ComponentFixture<ColourChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
